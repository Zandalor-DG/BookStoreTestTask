import { UserData } from '../../models/User/userData';

export enum ActionTypeUser {
    UpdateProfilePage = 'UpdateProfilePage',
    Authorized = 'Authorized',
    UpdateAvatar = 'UpdateAvatar',
    ProfilePage = 'ProfilePage',
    SetError = 'SetError',
    SetIsOpenModal = 'SetIsOpenModal',
    InitUser = 'InitUser',
    UserInitError = 'UserInitError',
    SetUserAvatar = 'SetUserAvatar',
    LogOut = 'LogOut',
}

export type ActionInitUser = {
    type: ActionTypeUser.InitUser;
    user: UserData;
};

export type ActionLogOut = {
    type: ActionTypeUser.LogOut;
};

export type ActionSetUserAvatar = {
    type: ActionTypeUser.SetUserAvatar;
    url: string;
};

export type ActionUserInitError = {
    type: ActionTypeUser.UserInitError;
    error: string;
};

export type ActionUpdateProfilePage = {
    type: ActionTypeUser.UpdateProfilePage;
    updateData: UserData;
};

export type ActionSetAuthorized = {
    type: ActionTypeUser.Authorized;
    profilePage: UserData;
};

export type ActionUpdateAvatar = {
    type: ActionTypeUser.UpdateAvatar;
};

export type ActionSetIsOpenModal = {
    type: ActionTypeUser.SetIsOpenModal;
    isOpen: boolean;
};

export type ActionSetError = {
    type: ActionTypeUser.SetError;
    error: string;
};

export type ActionUser =
    | ActionInitUser
    | ActionUpdateProfilePage
    | ActionSetAuthorized
    | ActionUpdateAvatar
    | ActionSetIsOpenModal
    | ActionUserInitError
    | ActionSetError
    | ActionSetUserAvatar
    | ActionLogOut;
