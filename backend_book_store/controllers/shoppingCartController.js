const models = require('../database/models');

exports.getAllItemsCart = async (req, res) => {
  try {
    const { userId } = req.decoded;

    const data = await models.Cart.findAll({
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

    res.status(200).json({ message: '', data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.postAddItemCart = async (req, res) => {
  try {
    const { itemId } = req.body;
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

    if (!created) {
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
    const id = !item.id ? cartId.id : itemCart.id;
    res.status(200).json({ error: false, message: 'Item added to cart', id });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.postRemoveItemCart;

exports.deleteDeleteAllItems;

exports.deleteDeleteItem;

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
