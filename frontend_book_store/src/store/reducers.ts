import { combineReducers } from 'redux';
import userReducer from './userStore/userReducer';

const reducers = combineReducers({
    userState: userReducer,
});

export type StateReduxType = ReturnType<typeof reducers>;

export default reducers;
