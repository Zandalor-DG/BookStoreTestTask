import { combineReducers } from 'redux';
import store from '.';
import bookStoreReducer from './bookStore/bookStroreReducer';
import ShoppingCardReducer from './shoppingCard/shoppingCardReducer';
import userReducer from './userStore/userReducer';

const reducers = combineReducers({
    userState: userReducer,
    bookStoreState: bookStoreReducer,
    shoppingCardState: ShoppingCardReducer,
});

export type AppDispatch = typeof store.dispatch;
export type StateReduxType = ReturnType<typeof reducers>;

export default reducers;
