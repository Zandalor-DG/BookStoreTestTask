import React from 'react';
import { NotificationUser } from '../../../models/NotificationStore/notification';
import css from './Notification.module.css';

interface INotificationContent {
    notifications: NotificationUser[] | null;
}

const NotificationContent: React.FC<INotificationContent> = ({ notifications }: INotificationContent) => {
    const content = notifications?.map((item) => {
        return (
            <React.Fragment key={item.id}>
                <a className={css.dropdown__link} href="#">
                    <h3>{item.type}</h3>
                    <p>{item.payload}</p>
                </a>
            </React.Fragment>
        );
    });

    return (
        <>
            <a className={css.dropdown__link} href="#">
                Link 1
            </a>
            {content}
        </>
    );
};

export default NotificationContent;
