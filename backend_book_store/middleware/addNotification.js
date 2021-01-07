const models = require('../database/models');

const addNotification = async (req) => {
  const { comment, reply, replyId } = req.body;
  const { id } = req.payload;

  const notification = await models.Notification.create({
    commentId: id,
    userId: replyId,
    type: `reply to comments by ${reply}`,
    payload: comment,
    read: false,
  });

  return {
    notification,
    isNotification: true,
  };
};

module.exports = addNotification;
