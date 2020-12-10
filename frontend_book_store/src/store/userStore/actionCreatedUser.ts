import { InputsLogin } from '../../components/header/account/LoginAccount';
import { InputsRegister } from '../../components/header/account/RegisterAccount';
import { ActionLoginUser, ActionRegisterUser, ActionTypeUser, ActionUpdateAvatar } from './actionTypesToDo';

export const registerUser = (payload: InputsRegister): ActionRegisterUser => ({
    type: ActionTypeUser.Register,
    payload,
});

export const loginUser = (payload: InputsLogin): ActionLoginUser => ({
    type: ActionTypeUser.Login,
    payload,
});

export const updateAvatarUser = (): ActionUpdateAvatar => ({
    type: ActionTypeUser.UpdateAvatar,
});
