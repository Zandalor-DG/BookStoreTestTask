import { NotificationUser } from './NotificationStore/notification';

export interface NotificationState {
    notifications: NotificationUser[] | null;
    openNotification: number | null;
    error?: string;
}
