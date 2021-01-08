import { CloseOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NotificationUser } from '../../../models/NotificationStore/notification';
import { setOpenNotification } from '../../../store/notificationStore/actionCreatedNotification';
import css from './Notification.module.css';

interface INotificationContent {
    notifications: NotificationUser[] | null;
    onDeleteNotification: (notificationId: number) => void;
    onReadNotification: (notificationId: number) => void;
}

const NotificationText: React.FC<INotificationContent> = ({
    notifications,
    onDeleteNotification,
    onReadNotification,
}: INotificationContent) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onOpenNotification = (commentId: number, bookId: number) => {
        dispatch(setOpenNotification(commentId));
        history.push(`/book/${bookId}`, { commentId });
    };

    const content = notifications?.map((item) => {
        return (
            <React.Fragment key={item.id}>
                <div className={css.dropdown__link}>
                    <span className={css.link__title}>
                        {item.type}
                        <span className={css.title__svg} onClick={() => onReadNotification(item.id)}>
                            {(item.read && <EyeOutlined />) || (!item.read && <EyeInvisibleOutlined />)}
                        </span>
                    </span>
                    <div className={css.link__wrapper}>
                        <span
                            onClick={() => onOpenNotification(item.commentId, item.Comment.CommentBook.id)}
                            className={css.wrapper__text}
                        >
                            {item.payload}
                        </span>
                        <span className={css.wrapper__button} onClick={() => onDeleteNotification(item.id)}>
                            <CloseOutlined />
                        </span>
                    </div>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className={css.dropDownText__wrapper}>
            <span className={css.dropdown__title}>Notifications</span>
            {content}
        </div>
    );
};

export default NotificationText;
