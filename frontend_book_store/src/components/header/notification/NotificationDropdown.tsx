import React from 'react';
import { NotificationUser } from '../../../models/NotificationStore/notification';
import css from './Notification.module.css';
import NotificationContent from './NotificationContent';

interface INotificationDropDown {
    notifications: NotificationUser[] | null;
}

const NotificationDropdown: React.FC<INotificationDropDown> = ({ notifications }: INotificationDropDown) => {
    return (
        <div className={css.dropdown__content}>
            <NotificationContent notifications={notifications} />
        </div>
    );
};

export default NotificationDropdown;
