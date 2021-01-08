const models = require('../database/models');

const addNotification = async (req) => {
  const { comment, reply, bookId } = req.body;
  const { replyUserId, commentId } = req.payload;

  const notification = await models.Notification.create({
    commentId: commentId,
    userId: replyUserId,
    type: `reply your comments by ${reply}`,
    payload: comment,
    read: false,
  });

  const notificationVM = {
    id: notification.id,
    commentId: notification.commentId,
    userId: notification.userId,
    type: notification.type,
    payload: notification.payload,
    read: notification.read,
    Comment: {
      CommentBook: {
        id: bookId,
      },
    },
  };

  return {
    notification: notificationVM,
    isNotification: true,
  };
};

module.exports = addNotification;
