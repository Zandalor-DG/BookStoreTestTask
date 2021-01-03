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
          as: 'SubTransaction',
          attributes: [
            'transaction_name',
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
      group: [
        'Transaction.id',
        'SubTransaction.id',
        'SubTransaction.Book.id',
        'SubTransaction.Book.Author.id',
      ],
      order: [['createdAt', 'ASC']],
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
    let totalAllPrice = 0;
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

    const result = await models.sequelize.transaction(async (t) => {
      const subTransaction = productModelInCart.map(async (a) => {
        totalAllPrice += a.Book.totalPrice;

        await models.SubTransaction.create(
          {
            transaction_name: `order #${transactionName}`,
            bookId: a.bookId,
            count: a.count,
            original_price: a.Book.price,
          },
          { transaction: t }
        );
      });

      const createTransaction = await models.Transaction.create(
        {
          userId: userId,
          transaction_name: `order #${transactionName}`,
        },
        { transaction: t }
      );

      const transaction = await models.Transaction.findOne({
        where: { transaction_name: `order #${transactionName}` },
        include: [
          {
            model: models.SubTransaction,
            as: 'SubTransaction',
            attributes: [
              'count',
              'original_price',
              //[Sequelize.literal('(count*original_price)'), 'totalPrice'],
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
        group: [
          'Transaction.id',
          'SubTransaction.id',
          'SubTransaction.Book.id',
          'SubTransaction.Book.Author.id',
        ],
      });

      return transaction;
    });

    req.transaction = result;
    next();
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};
