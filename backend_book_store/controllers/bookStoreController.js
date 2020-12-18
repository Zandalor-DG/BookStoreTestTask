const models = require('../database/models');

exports.allBooks = async (req, res) => {
  try {
    const { offset, limit } = req.body;

    if (!offset && !limit) {
      throw new Error('Email already used');
    }

    // const books = await models.Book.findAll({
    //   include: [
    //     {
    //       model: File,
    //       where: { id: 'coverId' },
    //     },
    //   ],
    //   limit,
    //   offset,
    //   //where: {}, // conditions
    // });

    const books = await models.Book.findAndCountAll({ limit, offset });
    const left = books.count - books.rows;
    const booksVM = books.rows.map((a) => {
      return {
        name: a.name,
        author: a.author,
        genre: a.genre,
        price: a.price,
        publishHouse: a.publishHouse,
        left,
      };
    });

    res.status(201).json({ booksVM });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
