import { initialState } from '../../data/initialState';
import { UserState } from '../../models/userState';
import { ActionTypeUser, ActionUser } from './actionTypesUser';

const userReducer = (state = initialState, action: ActionUser): UserState => {
    switch (action.type) {
        case ActionTypeUser.Authorized: {
            return { ...state, user: { ...action.profilePage }, isAuthorized: true };
        }
        case ActionTypeUser.UpdateProfilePage: {
            return { ...state, user: { ...action.updateData } };
        }
        case ActionTypeUser.UpdateAvatar: {
            return { ...state };
        }
        case ActionTypeUser.SetError:
            return {
                ...initialState,
                error: action.error,
            };
        default:
            return { ...state };
    }
};

export default userReducer;
