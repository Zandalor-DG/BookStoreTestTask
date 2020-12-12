import { UserData } from '../../models/User/userData';

export enum ActionTypeUser {
    UpdateProfilePage = 'UpdateProfilePage',
    Authorized = 'Authorized',
    UpdateAvatar = 'UpdateAvatar',
    ProfilePage = 'ProfilePage',
    SetError = 'SetError',
}

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

export type ActionSetError = {
    type: ActionTypeUser.SetError;
    error: string;
};

export type ActionUser = ActionUpdateProfilePage | ActionSetAuthorized | ActionUpdateAvatar | ActionSetError;
