import { UserData } from '../../models/User/userData';
import {
    ActionSetAuthorized,
    ActionSetError,
    ActionTypeUser,
    ActionUpdateAvatar,
    ActionUpdateProfilePage,
} from './actionTypesUser';

export const setAuthorizedUser = (profilePage: UserData): ActionSetAuthorized => ({
    type: ActionTypeUser.Authorized,
    profilePage,
});

export const updateProfilePage = (updateData: UserData): ActionUpdateProfilePage => ({
    type: ActionTypeUser.UpdateProfilePage,
    updateData,
});

export const setError = (error: string): ActionSetError => ({
    type: ActionTypeUser.SetError,
    error,
});

export const setUpdateAvatarUser = (): ActionUpdateAvatar => ({
    type: ActionTypeUser.UpdateAvatar,
});
