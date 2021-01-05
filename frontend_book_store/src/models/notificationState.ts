import { NotificationUser } from './NotificationStore/notification';

export interface NotificationState {
    notifications: NotificationUser[] | null;
    error?: string;
}
