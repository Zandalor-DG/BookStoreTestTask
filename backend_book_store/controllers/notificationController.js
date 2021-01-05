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
    const { notificationId } = req.query;
    const { userId } = req.decoded;

    if (!notificationId) {
      return new Error('no notification Id to delete item');
    }

    await models.Notification.destroy({
      where: {
        userId,
        id: notificationId,
      },
    });

    res.status(201).json({
      error: false,
      message: 'delete one notification',
      id: notificationId,
    });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.UpdateOneItem = async (req, res) => {
  try {
    const { userId } = req.decoded;
    const { notificationId } = req.body;

    if (!notificationId) {
      return new Error('no notification Id to update item');
    }

    const item = await models.Notification.update(
      {
        where: {
          userId,
          id: notificationId,
        },
      },
      {
        read: true,
      }
    );

    res.status(200).json({
      error: false,
      message: 'notification is read',
      id: notificationId,
    });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.AddOneItem;
