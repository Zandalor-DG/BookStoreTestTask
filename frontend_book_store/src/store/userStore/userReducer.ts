import { userInitialState } from '../../data/UserInitialState';
import { UserState } from '../../models/userState';
import { ActionTypeUser, ActionUser } from './actionTypesUser';

const userReducer = (state = userInitialState, action: ActionUser): UserState => {
    switch (action.type) {
        case ActionTypeUser.InitUser: {
            return { ...state, user: action.user, isInitialize: true };
        }
        case ActionTypeUser.LogOut: {
            return { ...state, user: null };
        }
        case ActionTypeUser.Authorized: {
            return { ...state, user: { ...action.profilePage } };
        }
        case ActionTypeUser.UpdateProfilePage: {
            return { ...state, user: { ...action.updateData } };
        }
        case ActionTypeUser.SetUserAvatar: {
            if (!state.user) return state;
            return {
                ...state,
                user: {
                    ...state.user,
                    avatar: action.url,
                },
            };
        }
        case ActionTypeUser.SetIsOpenModal: {
            return {
                ...state,
                isOpenModal: action.isOpen,
            };
        }
        case ActionTypeUser.UserInitError: {
            return {
                ...state,
                user: null,
                isInitialize: true,
                error: action.error,
            };
        }
        case ActionTypeUser.SetError:
            return {
                ...state,
                error: action.error,
                isInitialize: true,
            };
        default:
            return { ...state };
    }
};

export default userReducer;
