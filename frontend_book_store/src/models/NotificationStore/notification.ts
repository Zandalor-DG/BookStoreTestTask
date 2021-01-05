export interface NotificationUser {
    id: number;
    userId: number;
    type: string;
    payload: JSON;
    read: boolean;
}
