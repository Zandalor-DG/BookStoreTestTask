import { notificationsInitialState } from '../../data/NotificationsInitialState';
import { NotificationState } from '../../models/notificationState';
import { ActionNotification, ActionTypeNotification } from './actionTypeNotification';

const notificationReducer = (state = notificationsInitialState, action: ActionNotification): NotificationState => {
    switch (action.type) {
        case ActionTypeNotification.AddAllNotifications:
            return {
                ...state,
                notifications: [...action.notifications],
            };
        case ActionTypeNotification.AddOneNotification:
            const addOneItem = state.notifications ? [...state.notifications] : [];
            return {
                ...state,
                notifications: [...addOneItem, { ...action.notification }],
            };
        case ActionTypeNotification.ReadNotification:
            const readItem = state.notifications ? [...state.notifications] : [];
            return {
                ...state,
                notifications: readItem.map((item) => (item.id !== action.id ? item : { ...item, read: true })),
            };
        case ActionTypeNotification.DeleteNotification:
            const deleteItem = state.notifications ? [...state.notifications] : [];
            return {
                ...state,
                notifications: deleteItem.filter((item) => item.id !== action.id),
            };
        case ActionTypeNotification.ReadAllNotifications:
            const readAllNotifications = state.notifications ? [...state.notifications] : [];
            return {
                ...state,
                notifications: readAllNotifications.map((item) => {
                    return {
                        id: item.id,
                        payload: item.payload,
                        type: item.type,
                        userId: item.userId,
                        read: true,
                    };
                }),
            };
        case ActionTypeNotification.DeleteAllNotifications:
            return {
                ...state,
                notifications: null,
            };
        case ActionTypeNotification.SetErrorNotification:
            return {
                ...state,
                error: action.error,
            };
        default:
            return { ...state };
    }
};

export default notificationReducer;
