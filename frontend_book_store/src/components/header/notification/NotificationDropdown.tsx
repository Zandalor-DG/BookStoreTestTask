import React from 'react';
import { useDispatch } from 'react-redux';
import { NotificationUser } from '../../../models/NotificationStore/notification';
import { deleteNotificationThunk, readNotificationThunk } from '../../../store/notificationStore/thunkNotification';
import css from './Notification.module.css';
import NotificationText from './NotificationText';

interface INotificationDropDown {
    notifications: NotificationUser[] | null;
}

const NotificationDropdown: React.FC<INotificationDropDown> = ({ notifications }: INotificationDropDown) => {
    const dispatch = useDispatch();

    const onDeleteNotification = (notificationId: number) => {
        dispatch(deleteNotificationThunk(notificationId));
    };
    const onReadNotification = (notificationId: number) => {
        dispatch(readNotificationThunk(notificationId));
    };
    // const onOpenNotification = () => {
    //     dispatch()
    // }

    return (
        <div className={css.dropdown__content}>
            <NotificationText
                notifications={notifications}
                onDeleteNotification={onDeleteNotification}
                onReadNotification={onReadNotification}
            />
        </div>
    );
};

export default NotificationDropdown;
