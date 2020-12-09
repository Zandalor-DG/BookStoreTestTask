import { initialState } from '../../data/initialState';
import { UserState } from '../../models/userState';
import { ActionTypeUser, ActionUser } from './actionTypesToDo';

const userReducer = (state = initialState, action: ActionUser): UserState => {
    switch (action.type) {
        case ActionTypeUser.Register: {
            return { ...state };
        }
        default:
            return { ...state };
    }
};

export default userReducer;
