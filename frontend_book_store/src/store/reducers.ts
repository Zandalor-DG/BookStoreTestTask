import { combineReducers } from 'redux';
import userReducer from './userStore/userReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    userState: userReducer,
    form: formReducer,
});

export type StateReduxType = ReturnType<typeof reducers>;

export default reducers;
