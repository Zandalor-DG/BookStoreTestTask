import { combineReducers } from 'redux';
import store from '.';
import bookStoreReducer from './bookStoreStore/bookStroreReducer';
import notificationReducer from './notificationStore/notificationReducer';
import ShoppingCardReducer from './shoppingCardStore/shoppingCardReducer';
import transactionReducer from './transactionStore/transactionReducer';
import userReducer from './userStore/userReducer';

const reducers = combineReducers({
    userState: userReducer,
    bookStoreState: bookStoreReducer,
    shoppingCardState: ShoppingCardReducer,
    transactionState: transactionReducer,
    notificationsState: notificationReducer,
});

export type AppDispatch = typeof store.dispatch;
export type StateReduxType = ReturnType<typeof reducers>;

export default reducers;
