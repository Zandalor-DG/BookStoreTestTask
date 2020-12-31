const models = require('../database/models');

exports.getAllItemsCart = async (req, res) => {
  try {
    const { userId } = req.decoded;

    const productModelInCard = await models.Cart.findAll({
      where: { userId: userId },
      include: [
        {
          model: models.Book,
          as: 'Book',
          attributes: ['name', 'price'],
          include: [
            {
              model: models.Author,
              attributes: ['name'],
            },
            {
              model: models.File,
              attributes: ['path_name'],
            },
          ],
        },
      ],
      order: [['createdAt', 'ASC']],
    });

    res
      .status(200)
      .json({ error: false, message: 'access', productModelInCard });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.postAddItemCart = async (req, res) => {
  try {
    const { itemId, value } = req.body;
    const { userId } = req.decoded;

    if (!itemId) {
      throw new Error('no id to create a model');
    }

    let cartId;
    const [itemCart, created] = await models.Cart.findOrCreate({
      where: {
        userId,
        bookId: itemId,
      },
      defaults: {
        count: 1,
      },
    });

    if (!created && !value) {
      cartId = await models.Cart.update(
        { count: itemCart.count + 1 },
        {
          where: {
            userId,
            bookId: itemId,
          },
        }
      );
    }

    if (value) {
      cartId = await models.Cart.update(
        { count: itemCart.count + value },
        {
          where: {
            userId,
            bookId: itemId,
          },
        }
      );
    }
    const id = !itemCart.id ? cartId.id : itemCart.id;
    res.status(200).json({ error: false, message: 'Item added to cart', id });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.postRemoveItemCart = async (req, res) => {
  try {
    const { itemId } = req.body;
    const { userId } = req.decoded;

    if (!itemId) {
      throw new Error('no id to delete item');
    }

    //const book = models.Book.findOne({ where: { id: bookId } });

    const item = await models.Cart.findOne({
      where: {
        bookId: itemId,
        userId: userId,
      },
    });

    if (item.count === 1) {
      await models.Cart.destroy({
        where: {
          bookId: itemId,
          userId,
        },
      });

      res
        .status(200)
        .json({ error: false, message: 'Item delete to cart', id: item.id });
    }

    await models.Cart.update(
      { count: -1 },
      {
        where: {
          id: item.id,
          bookId: itemId,
          userId,
        },
      }
    );

    res
      .status(200)
      .json({ error: false, message: 'Item remove to cart', id: item.id });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.deleteDeleteItem = async (req, res) => {
  try {
    const { itemId } = req.body;
    const { userId } = req.decoded;

    if (!itemId) {
      throw new Error('no id to delete item');
    }

    const item = await models.Cart.findOne({
      where: {
        bookId: itemId,
        userId: userId,
      },
    });

    await models.Cart.destroy({
      where: {
        bookId: itemId,
        userId,
      },
    });

    res
      .status(200)
      .json({ error: false, message: 'Item delete to cart', id: item.id });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.deleteDeleteAllItems = async (req, res) => {
  try {
    const { userId } = req.decoded;

    await models.Cart.destroy({
      where: {
        userId,
      },
    });

    res.status(200).json({ error: false, message: 'All item delete to cart' });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

// const models = require('../database/models');

// try {

//   const result = await sequelize.transaction(async (t) => {

//     const user = await User.create({
//       firstName: 'Abraham',
//       lastName: 'Lincoln'
//     }, { transaction: t });

//     await user.setShooter({
//       firstName: 'John',
//       lastName: 'Boothe'
//     }, { transaction: t });

//     return user;

//   });

//   // If the execution reaches this line, the transaction has been committed successfully
//   // `result` is whatever was returned from the transaction callback (the `user`, in this case)

// } catch (error) {

//   // If the execution reaches this line, an error occurred.
//   // The transaction has already been rolled back automatically by Sequelize!

// }
