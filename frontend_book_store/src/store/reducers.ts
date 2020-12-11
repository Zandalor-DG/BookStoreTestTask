import { combineReducers } from 'redux';
import store from '.';
import userReducer from './userStore/userReducer';

const reducers = combineReducers({
    userState: userReducer,
});

export type AppDispatch = typeof store.dispatch;
export type StateReduxType = ReturnType<typeof reducers>;

export default reducers;
