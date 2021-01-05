import { NotificationUser } from '../../models/NotificationStore/notification';
import {
    ActionAddAllNotifications,
    ActionDeleteAllNotifications,
    ActionDeleteNotification,
    ActionReadAllNotifications,
    ActionReadNotification,
    ActionSetErrorNotification,
    ActionTypeNotification,
} from './actionTypeNotification';

export const addAllNotifications = (notifications: NotificationUser[]): ActionAddAllNotifications => ({
    type: ActionTypeNotification.AddAllNotifications,
    notifications,
});

export const readNotification = (id: number): ActionReadNotification => ({
    type: ActionTypeNotification.ReadNotification,
    id,
});

export const deleteNotification = (id: number): ActionDeleteNotification => ({
    type: ActionTypeNotification.DeleteNotification,
    id,
});

export const deleteAllNotifications = (): ActionDeleteAllNotifications => ({
    type: ActionTypeNotification.DeleteAllNotifications,
});

export const readAllNotifications = (): ActionReadAllNotifications => ({
    type: ActionTypeNotification.ReadAllNotifications,
});

export const serErrorNotification = (error: string): ActionSetErrorNotification => ({
    type: ActionTypeNotification.SetErrorNotification,
    error,
});
