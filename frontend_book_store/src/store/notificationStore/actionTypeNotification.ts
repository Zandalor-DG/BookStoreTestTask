import { NotificationUser } from '../../models/NotificationStore/notification';

export enum ActionTypeNotification {
    AddAllNotifications = 'AddAllNotifications',
    ReadNotification = 'ReadNotification',
    DeleteNotification = 'DeleteNotification',
    DeleteAllNotifications = 'DeleteAllNotifications',
    ReadAllNotifications = 'ReadAllNotifications',
    SetErrorNotification = 'SetErrorNotification',
}

export type ActionAddAllNotifications = {
    type: ActionTypeNotification.AddAllNotifications;
    notifications: NotificationUser[];
};

export type ActionReadNotification = {
    type: ActionTypeNotification.ReadNotification;
    id: number;
};

export type ActionDeleteNotification = {
    type: ActionTypeNotification.DeleteNotification;
    id: number;
};

export type ActionDeleteAllNotifications = {
    type: ActionTypeNotification.DeleteAllNotifications;
};

export type ActionReadAllNotifications = {
    type: ActionTypeNotification.ReadAllNotifications;
};

export type ActionSetErrorNotification = {
    type: ActionTypeNotification.SetErrorNotification;
    error: string;
};

export type ActionNotification =
    | ActionAddAllNotifications
    | ActionReadNotification
    | ActionDeleteNotification
    | ActionDeleteAllNotifications
    | ActionReadAllNotifications
    | ActionSetErrorNotification;
