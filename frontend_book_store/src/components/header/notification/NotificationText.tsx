import { CloseOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import React from 'react';
import { NotificationUser } from '../../../models/NotificationStore/notification';
import css from './Notification.module.css';

interface INotificationContent {
    notifications: NotificationUser[] | null;
    onDeleteNotification: (notificationId: number) => void;
    onReadNotification: (notificationId: number) => void;
    onOpenNotification: (commentId: number, bookId: number, notificationId: number) => void;
}

const NotificationText: React.FC<INotificationContent> = ({
    notifications,
    onDeleteNotification,
    onReadNotification,
    onOpenNotification,
}: INotificationContent) => {
    const content = notifications?.map((item) => {
        return (
            <React.Fragment key={item.id}>
                <div className={css.dropdown__borderTop}>
                    <div className={css.dropdown__line}></div>
                </div>
                <div className={css.dropdown__link}>
                    <span className={css.link__title}>
                        {item.type}
                        <span className={css.title__svg} onClick={() => onReadNotification(item.id)}>
                            {(item.read && <EyeOutlined />) || (!item.read && <EyeInvisibleOutlined />)}
                        </span>
                    </span>
                    <div className={css.link__wrapper}>
                        <span
                            onClick={() => onOpenNotification(item.commentId, item.Comment.CommentBook.id, item.id)}
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
