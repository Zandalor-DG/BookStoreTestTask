const models = require('../database/models');
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
          attributes: ['transaction_name', 'count', 'original_price'],
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
      order: [['createdAt', 'ASC']],
    });

    res
      .status(200)
      .json({ error: false, message: 'get all transaction item', allItem });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.postSetTransaction = async (req, res) => {
  try {
    const { userId } = req.decoded;

    const productModelInCart = await models.Cart.findAll({
      where: { userId },
      include: [
        {
          model: models.Book,
          as: 'Book',
          attributes: ['name', 'price'],
        },
      ],
      order: [['createdAt', 'ASC']],
    });

    const result = await models.sequelize.transaction(async (t) => {
      const subTransaction = productModelInCart.map(async (a) => {
        await models.subTransaction.create(
          {
            transaction_name: a.Book.name,
            bookId: a.bookId,
            count: a.count,
            original_price: a.Book.price,
          },
          { transaction: t }
        );
      });

      const transaction = subTransaction.map(async (a) => {
        await models.Transaction.create(
          {
            userId: userId,
            transaction_name: a.transaction_name,
          },
          { transaction: t }
        );
      });

      return transaction;
    });

    res.status(200).json({ error: false, message: 'All item buy', result });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};
