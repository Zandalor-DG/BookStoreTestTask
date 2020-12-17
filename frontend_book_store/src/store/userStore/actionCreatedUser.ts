import { baseURL } from '../../api/axios';
import { UserData } from '../../models/User/userData';
import {
    ActionInitUser,
    ActionLogOut,
    ActionSetAuthorized,
    ActionSetError,
    ActionSetIsOpenModal,
    ActionSetUserAvatar,
    ActionTypeUser,
    ActionUpdateProfilePage,
    ActionUserInitError,
} from './actionTypesUser';

export const setInitialUser = (user: UserData): ActionInitUser => ({
    type: ActionTypeUser.InitUser,
    user,
});

export const setUserAvatar = (url: string): ActionSetUserAvatar => ({
    type: ActionTypeUser.SetUserAvatar,
    url: baseURL + url,
});

export const logOut = (): ActionLogOut => ({
    type: ActionTypeUser.LogOut,
});

export const setAuthorizedUser = (profilePage: UserData): ActionSetAuthorized => ({
    type: ActionTypeUser.Authorized,
    profilePage,
});

export const updateProfilePage = (updateData: UserData): ActionUpdateProfilePage => ({
    type: ActionTypeUser.UpdateProfilePage,
    updateData,
});

export const setIsOpenModal = (isOpen: boolean): ActionSetIsOpenModal => ({
    type: ActionTypeUser.SetIsOpenModal,
    isOpen,
});

export const setUserInitError = (error: string): ActionUserInitError => ({
    type: ActionTypeUser.UserInitError,
    error,
});

export const setError = (error: string): ActionSetError => ({
    type: ActionTypeUser.SetError,
    error,
});
