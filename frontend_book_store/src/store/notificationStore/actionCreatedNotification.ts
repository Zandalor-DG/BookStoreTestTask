import { NotificationUser } from '../../models/NotificationStore/notification';
import {
    ActionAddAllNotifications,
    ActionAddOneNotification,
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

export const AddOneNotification = (notification: NotificationUser): ActionAddOneNotification => ({
    type: ActionTypeNotification.AddOneNotification,
    notification,
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

export const setErrorNotification = (error: string): ActionSetErrorNotification => ({
    type: ActionTypeNotification.SetErrorNotification,
    error,
});
