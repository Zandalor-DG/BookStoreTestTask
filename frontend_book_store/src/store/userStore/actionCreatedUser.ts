import { UserData } from '../../models/User/userData';
import {
    ActionInitUser,
    ActionSetAuthorized,
    ActionSetError,
    ActionSetIsOpenModal,
    ActionTypeUser,
    ActionUpdateAvatar,
    ActionUpdateProfilePage,
    ActionUserInitError,
} from './actionTypesUser';

export const setInitialUser = (user: UserData): ActionInitUser => ({
    type: ActionTypeUser.InitUser,
    user,
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

export const setUpdateAvatarUser = (): ActionUpdateAvatar => ({
    type: ActionTypeUser.UpdateAvatar,
});

export const setUserInitError = (error: string): ActionUserInitError => ({
    type: ActionTypeUser.UserInitError,
    error,
});

export const setError = (error: string): ActionSetError => ({
    type: ActionTypeUser.SetError,
    error,
});
