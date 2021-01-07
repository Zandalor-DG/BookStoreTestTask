import { deleteOneItem, getAllNotifications, updateOneItem } from '../../api/apiNotification';
import { AppDispatch } from '../reducers';
import {
    addAllNotifications,
    deleteAllNotifications,
    deleteNotification,
    readAllNotifications,
    readNotification,
    setErrorNotification,
} from './actionCreatedNotification';

export const allItemsNotificationThunk = () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const data = await getAllNotifications();
        dispatch(addAllNotifications(data));
    } catch (err) {
        dispatch(setErrorNotification(err.message));
    }
};

export const readNotificationThunk = (notificationId: number) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const id = await updateOneItem(notificationId);
        dispatch(readNotification(id));
    } catch (err) {
        dispatch(setErrorNotification(err.message));
    }
};

export const deleteNotificationThunk = (notificationId: number) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const id = await deleteOneItem(notificationId);
        dispatch(deleteNotification(id));
    } catch (err) {
        dispatch(setErrorNotification(err.message));
    }
};

export const deleteAllNotificationsThunk = () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(deleteAllNotifications());
    } catch (err) {
        dispatch(setErrorNotification(err.message));
    }
};

export const readAllNotificationsThunk = () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(readAllNotifications());
    } catch (err) {
        dispatch(setErrorNotification(err.message));
    }
};
