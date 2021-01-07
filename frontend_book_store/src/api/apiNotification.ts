import { NotificationUser } from '../models/NotificationStore/notification';
import axios from './axios';

export const getAllNotifications = async (): Promise<NotificationUser[]> => {
    const res = await axios.get('/notification/allnotifications');
    const data: NotificationUser[] = res.data.allNotification;
    return data;
};

export const deleteOneItem = async (notificationId: number): Promise<number> => {
    const res = await axios.delete('/notification/deleteoneitem', { params: { id: notificationId } });
    const id: number = res.data.id;
    return id;
};

export const updateOneItem = async (notificationId: number): Promise<number> => {
    const res = await axios.put('/notification/updateoneitem', { id: notificationId });
    const id: number = res.data.id;
    return id;
};

export const deleteAllItems = async (): Promise<void> => {
    await axios.delete('/notification/deleteallitems');
};

export const updateAllItems = async (): Promise<void> => {
    await axios.delete('/notification/updateallitems');
};
