import { initialState } from '../../data/initialState';
import { UserState } from '../../models/userState';
import { ActionTypeUser, ActionUser } from './actionTypesUser';

const userReducer = (state = initialState, action: ActionUser): UserState => {
    switch (action.type) {
        case ActionTypeUser.Register: {
            return { ...state };
        }
        case ActionTypeUser.Login: {
            return { ...state, user: { ...state.user }, isAuthorized: true };
        }
        case ActionTypeUser.UpdateAvatar: {
            return { ...state };
        }
        case ActionTypeUser.ProfilePage: {
            return { ...state };
        }
        case 'set_error':
            return {
                ...initialState,
                error: action.error,
            };
        default:
            return { ...state };
    }
};

export default userReducer;
