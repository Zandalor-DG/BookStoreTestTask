import { BellOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import navBar from '../navBar/NavBar.module.css';
import css from './Notification.module.css';
import NotificationDropdown from './NotificationDropdown';

const NotificationUser: React.FC = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const notifications = useSelector((state: StateReduxType) => state.notificationsState.notifications);

    const onClickNotification = () => {
        return setIsNotificationOpen(!isNotificationOpen);
    };

    const content = isNotificationOpen && <NotificationDropdown notifications={notifications} />;

    return (
        <div className={css.shoppingCart__dropdown}>
            <BellOutlined onClick={onClickNotification} style={{ fontSize: '30px' }} className={navBar.navLink} />
            {content}
        </div>
    );
};

export default NotificationUser;
