// const models = require('./database/models');

// async function getData() {
//   // const booksResponse = await models.Book.findAndCountAll({
//   //     include: [
//   //     {
//   //         model: models.File,
//   //         as: 'File',
//   //         attributes: ['path_name'],
//   //     },
//   //     {
//   //         model: models.Author,
//   //         as: 'Author',
//   //         attributes: ['name'],
//   //     },
//   //     {
//   //         model: models.Publish,
//   //         as: 'Publish',
//   //         attributes: ['name'],
//   //     },
//   //     {
//   //         model: models.Genre,
//   //         as: 'Genre',
//   //         attributes: ['name'],
//   //     },
//   //     ],
//   //     // limit,
//   //     // offset,
//   //     //where: {}, // conditions
//   // });

//   //   const publ = await models.Publish.findByPk(2);

//   const book = await models.Book.findByPk(1, {
//     include: [
//       //   {
//       //     model: models.File,
//       //     as: 'File',
//       //     // attributes: ['path_name'],
//       //   },
//       //   {
//       //     model: models.Author,
//       //     as: 'Author',
//       //     attributes: ['name'],
//       //   },
//       //   {
//       //     model: models.Publish,
//       //     as: 'Publish',
//       //     attributes: ['name'],
//       //   },
//       {
//         model: models.Genre,
//         as: 'Genre',
//         // attributes: ['name'],
//       },
//       // limit,
//       // offset,
//       //where: {}, // conditions
//     ],
//   });
//   let a = book.toJSON();
//   console.log(booksResponse);
// }

// getData();
