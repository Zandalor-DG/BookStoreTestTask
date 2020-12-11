import { InputsRegister } from '../../components/header/account/RegisterAccount';
import { InputsLogin } from '../../components/header/account/LoginAccount';
import { UserData } from '../../models/User/userData';

export enum ActionTypeUser {
    Register = 'Register',
    Login = 'Login',
    UpdateAvatar = 'UpdateAvatar',
    ProfilePage = 'ProfilePage',
}

export type ActionRegisterUser = {
    type: ActionTypeUser.Register;
    payload: InputsRegister;
};

export type ActionLoginUser = {
    type: ActionTypeUser.Login;
    payload: UserData;
};

export type ActionUpdateAvatar = {
    type: ActionTypeUser.UpdateAvatar;
};

export type ActionProfilePage = {
    type: ActionTypeUser.ProfilePage;
    payload: UserData;
};

export type ActionUser =
    | ActionRegisterUser
    | ActionLoginUser
    | ActionUpdateAvatar
    | ActionProfilePage
    | { type: 'set_error'; error: string };
