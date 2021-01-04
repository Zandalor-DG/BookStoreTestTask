const models = require('../database/models');
const { Sequelize } = require('sequelize');
// const { sequelize } = require('sequelize');

exports.allTransactionItem = async (req, res) => {
  try {
    const { userId } = req.decoded;

    const allItem = await models.Transaction.findAll({
      where: { userId },
      include: [
        {
          model: models.SubTransaction,
          as: 'TransactionItem',
          attributes: [
            'count',
            'original_price',
            [Sequelize.literal('(count*original_price)'), 'totalPrice'],
          ],
          include: [
            {
              model: models.Book,
              attributes: ['name'],
              include: [
                {
                  model: models.Author,
                  attributes: ['name'],
                },
              ],
            },
          ],
        },
      ],
    });

    res
      .status(200)
      .json({ error: false, message: 'get all transaction item', allItem });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.postSetTransaction = async (req, res, next) => {
  try {
    const { userId } = req.decoded;
    const { transactionName } = req.body;
    const t = await models.sequelize.transaction();
    let totalAllPrice = 0;
    let transactionItem;

    if (!transactionName) {
      throw Error('no transaction name');
    }

    const productModelInCart = await models.Cart.findAll({
      where: { userId },
      include: [
        {
          model: models.Book,
          as: 'Book',
          attributes: [
            'price',
            [Sequelize.literal('(count*price)'), 'totalPrice'],
          ],
        },
      ],
      group: ['Cart.id', 'Book.id'],
      order: [['createdAt', 'ASC']],
    });

    try {
      // const result = await models.sequelize.transaction(async (t) => {
      transactionItem = await models.Transaction.create(
        {
          userId: userId,
          transaction_name: `order #${transactionName}`,
        },
        { transaction: t }
      );

      const subTrans = productModelInCart.map((a) => {
        return models.SubTransaction.create(
          {
            transactionId: transactionItem.id,
            bookId: a.bookId,
            count: a.count,
            original_price: a.Book.price,
          },
          { transaction: t }
        );
      });
      await Promise.all(subTrans);

      await t.commit();
    } catch (err) {
      await t.rollback();
    }

    const transaction = await models.Transaction.findOne({
      where: { id: transactionItem.id },
      include: [
        {
          model: models.SubTransaction,
          as: 'TransactionItem',
          attributes: [
            'count',
            'original_price',
            [Sequelize.literal('(count*original_price)'), 'totalPrice'],
          ],
          include: [
            {
              model: models.Book,
              attributes: ['name'],
              include: [
                {
                  model: models.Author,
                  attributes: ['name'],
                },
              ],
            },
          ],
        },
      ],
    });

    req.transaction = { transaction, totalAllPrice };
    next();
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};
