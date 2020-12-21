const paginateMiddleware = (req, res, next) => {
  try {
    const { page, pageSize } = req.body;

    if (!page && !pageSize) {
      throw new Error('Not offset or limit data');
    }
    const paginate = (page, pageSize) => {
      const offset = (page - 1) * pageSize;
      const limit = pageSize;

      return {
        offset,
        limit,
      };
    };

    req.body = paginate(page, pageSize);
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = paginateMiddleware;
