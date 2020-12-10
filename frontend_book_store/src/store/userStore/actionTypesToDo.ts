import { InputsRegister } from '../../components/header/account/RegisterAccount';
import { InputsLogin } from '../../components/header/account/LoginAccount';

export enum ActionTypeUser {
    Register = 'Register',
    Login = 'Login',
    UpdateAvatar = 'UpdateAvatar',
}

export type ActionRegisterUser = {
    type: ActionTypeUser.Register;
    payload: InputsRegister;
};

export type ActionLoginUser = {
    type: ActionTypeUser.Login;
    payload: InputsLogin;
};

export type ActionUpdateAvatar = {
    type: ActionTypeUser.UpdateAvatar;
};

export type ActionUser = ActionRegisterUser | ActionLoginUser | ActionUpdateAvatar;
