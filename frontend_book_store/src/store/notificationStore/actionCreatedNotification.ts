import { NotificationUser } from '../../models/NotificationStore/notification';
import {
    ActionAddAllNotifications,
    ActionAddOneNotification,
    ActionDeleteAllNotifications,
    ActionDeleteNotification,
    ActionReadAllNotifications,
    ActionReadNotification,
    ActionSetErrorNotification,
    ActionSetNullOpenNotification,
    ActionSetOpenNotification,
    ActionTypeNotification,
} from './actionTypeNotification';

export const addAllNotifications = (notifications: NotificationUser[]): ActionAddAllNotifications => ({
    type: ActionTypeNotification.AddAllNotifications,
    notifications,
});

export const addOneNotification = (notification: NotificationUser): ActionAddOneNotification => ({
    type: ActionTypeNotification.AddOneNotification,
    notification,
});

export const setOpenNotification = (openNotification: number): ActionSetOpenNotification => ({
    type: ActionTypeNotification.SetOpenNotification,
    openNotification,
});

export const setNullOpenNotification = (): ActionSetNullOpenNotification => ({
    type: ActionTypeNotification.SetNullOpenNotification,
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
