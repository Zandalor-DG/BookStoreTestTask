const models = require('../database/models');
const { Op } = require('sequelize');

const paginate = (page, pageSize) => {
  const offset = (page - 1) * pageSize;
  const limit = pageSize;

  return {
    offset,
    limit,
  };
};

exports.allBooks = async (req, res) => {
  try {
    const {
      page,
      pageSize,
      author,
      genres,
      publish,
      minPrice,
      maxPrice,
    } = req.query;

    if (!page && !pageSize) {
      throw new Error('Not offset or limit data');
    }
    const { offset, limit } = paginate(page, pageSize);

    const booksResponse = await models.Book.findAndCountAll({
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
          where: !author ? {} : { id: author },
        },
        {
          model: models.Publish,
          as: 'Publish',
          attributes: ['name'],
          where: !publish ? {} : { id: publish },
        },
        {
          model: models.Genre,
          as: 'Genre',
          attributes: ['name'],
          where: !genres
            ? {}
            : genres && { id: { [Op.in]: genres.split(',') } },
        },
      ],
      limit,
      offset,
      where:
        !minPrice && !maxPrice
          ? {}
          : minPrice &&
            maxPrice && {
              price: {
                [Op.between]: [+minPrice, +maxPrice],
              },
            },
      // conditions
    });

    res.status(201).json({ booksResponse });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.allFilteringOptions = async (req, res) => {
  try {
    const allAuthor = await models.Author.findAll({ raw: true });
    const allPublish = await models.Publish.findAll({ raw: true });
    const allGenre = await models.Genre.findAll({ raw: true });
    const minPrice = await models.Book.min('price', {});
    const maxPrice = await models.Book.max('price', {});
    const allFilteringOptions = {
      allAuthor,
      allPublish,
      allGenre,
      minPrice,
      maxPrice,
    };
    res.status(201).json(allFilteringOptions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
