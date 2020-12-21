const models = require('../database/models');

exports.allBooks = async (req, res) => {
  try {
    const { offset, limit } = req.body;

    if (!offset && !limit) {
      throw new Error('Email already used');
    }

    const books = await models.Book.findAndCountAll({
      include: [
        {
          model: models.File,
          as: 'File',
          attributes: ['path_name'],
        },
        {
          model: models.Author,
          as: 'Author',
          attributes: ['name'],
        },
        {
          model: models.Publish,
          as: 'Publish',
          attributes: ['name'],
        },
        {
          model: models.Genre,
          as: 'Genre',
          attributes: ['name'],
        },
      ],
      limit,
      offset,
      //where: {}, // conditions
    });

    // const booksVM = books.rows.map((a) => {
    //   return {
    //     id: a.id,
    //     name: a.name,
    //     author: a.author,
    //     genre: a.genre,
    //     price: a.price,
    //     publishHouse: a.publishHouse,
    //     pathCover: a.File.path_name,
    //   };
    // });

    res.status(201).json({ books });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// exports.filterBook = async (req, res) => {
//   try {
//     const { offset, limit, author, genre, publishHouse } = req.body;

//     let filterBook;

//     if (!offset && !limit) {
//       throw new Error('Email already used');
//     }

//     switch (key) {
//       case value:
//         break;

//       default:
//         break;
//     }

//     res.status(201).json({ booksVM, left });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
