import { NotificationUser } from '../../models/NotificationStore/notification';

export enum ActionTypeNotification {
    AddAllNotifications = 'AddAllNotifications',
    AddOneNotification = 'AddOneNotification',
    ReadNotification = 'ReadNotification',
    DeleteNotification = 'DeleteNotification',
    DeleteAllNotifications = 'DeleteAllNotifications',
    ReadAllNotifications = 'ReadAllNotifications',
    SetOpenNotification = 'SetOpenNotification',
    SetNullOpenNotification = 'SetNullOpenNotification',
    SetErrorNotification = 'SetErrorNotification',
}

export type ActionAddAllNotifications = {
    type: ActionTypeNotification.AddAllNotifications;
    notifications: NotificationUser[];
};

export type ActionSetOpenNotification = {
    type: ActionTypeNotification.SetOpenNotification;
    openNotification: number;
};

export type ActionSetNullOpenNotification = {
    type: ActionTypeNotification.SetNullOpenNotification;
};

export type ActionAddOneNotification = {
    type: ActionTypeNotification.AddOneNotification;
    notification: NotificationUser;
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
    | ActionAddOneNotification
    | ActionSetOpenNotification
    | ActionSetNullOpenNotification
    | ActionReadNotification
    | ActionDeleteNotification
    | ActionDeleteAllNotifications
    | ActionReadAllNotifications
    | ActionSetErrorNotification;
