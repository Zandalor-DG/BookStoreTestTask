import { BellOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import css from './Notification.module.css';
import NotificationDropdown from './NotificationDropdown';

const NotificationPage: React.FC = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const notifications = useSelector((state: StateReduxType) => state.notificationsState.notifications);
    const countNotReadNotifications = notifications?.filter((a) => !a.read);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsNotificationOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    const isOpenedNotification = () => {
        return setIsNotificationOpen(!isNotificationOpen);
    };

    const content = isNotificationOpen && <NotificationDropdown notifications={notifications} />;

    const notificationCounter = (countNotReadNotifications?.length || 0) > 0 && (
        <div className={css.dropdown__counterOfNotification}>
            <span>{countNotReadNotifications?.length}</span>
        </div>
    );

    return (
        <div ref={ref} className={css.shoppingCart__dropdown}>
            {notificationCounter}
            <BellOutlined onClick={isOpenedNotification} style={{ fontSize: '30px' }} className={css.navLink} />
            {content}
        </div>
    );
};

export default NotificationPage;
