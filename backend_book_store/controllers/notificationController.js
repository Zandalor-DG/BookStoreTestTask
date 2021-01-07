const models = require('../database/models');

exports.getAllNotifications = async (req, res) => {
  try {
    const { userId } = req.decoded;

    const allNotification = await models.Notification.findAll({
      where: { userId },
      order: [['read', 'ASC']],
      include: [
        {
          model: models.Comment,
          attributes: ['comment', 'reply'],
          include: [
            {
              model: models.Book,
              as: 'CommentBook',
              attributes: ['name', 'id', 'coverId'],
            },
          ],
        },
      ],
    });

    res
      .status(200)
      .json({ error: false, message: 'all notification', allNotification });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.deleteOneItem = async (req, res) => {
  try {
    const { id } = req.query;
    const { userId } = req.decoded;

    if (!id) {
      return new Error('no notification Id to delete item');
    }

    await models.Notification.destroy({
      where: {
        userId,
        id,
      },
    });

    res.status(201).json({
      error: false,
      message: 'delete one notification',
      id,
    });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.updateOneItem = async (req, res) => {
  try {
    const { userId } = req.decoded;
    const { id } = req.body;

    if (!id) {
      return new Error('no notification Id to update item');
    }

    await models.Notification.update(
      {
        where: {
          userId,
          id,
        },
      },
      {
        read: true,
      }
    );

    res.status(200).json({
      error: false,
      message: 'notification is read',
      id,
    });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.deleteAllItems = async (req, res) => {
  try {
    const { userId } = req.decoded;

    await models.Notification.destroy({
      where: {
        userId,
      },
    });

    res
      .status(200)
      .json({ error: false, message: 'All item delete to notifications' });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.updateAllItems = async (req, res) => {
  try {
    const { userId } = req.decoded;

    await models.Notification.update(
      {
        where: {
          userId,
        },
      },
      {
        read: true,
      }
    );

    res.status(200).json({ error: false, message: 'All item update to read' });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};
