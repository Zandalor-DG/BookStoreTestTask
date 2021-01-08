import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NotificationUser } from '../../../models/NotificationStore/notification';
import { setOpenNotification } from '../../../store/notificationStore/actionCreatedNotification';
import { deleteNotificationThunk, readNotificationThunk } from '../../../store/notificationStore/thunkNotification';
import css from './Notification.module.css';
import NotificationText from './NotificationText';

interface INotificationDropDown {
    notifications: NotificationUser[] | null;
}

const NotificationDropdown: React.FC<INotificationDropDown> = ({ notifications }: INotificationDropDown) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onDeleteNotification = (notificationId: number) => {
        dispatch(deleteNotificationThunk(notificationId));
    };
    const onReadNotification = (notificationId: number) => {
        dispatch(readNotificationThunk(notificationId));
    };
    const onOpenNotification = (commentId: number, bookId: number, notificationId: number) => {
        dispatch(setOpenNotification(commentId));
        dispatch(readNotificationThunk(notificationId));
        history.push(`/book/${bookId}`, { commentId });
    };

    return (
        <div className={css.dropdown__content}>
            <NotificationText
                notifications={notifications}
                onDeleteNotification={onDeleteNotification}
                onReadNotification={onReadNotification}
                onOpenNotification={onOpenNotification}
            />
        </div>
    );
};

export default NotificationDropdown;
