import { InputsRegister } from '../../components/header/account/RegisterAccount';
import { UserData } from '../../models/User/userData';
import { ActionLoginUser, ActionRegisterUser, ActionTypeUser, ActionUpdateAvatar } from './actionTypesUser';

export const getRegisterUser = (payload: InputsRegister): ActionRegisterUser => ({
    type: ActionTypeUser.Register,
    payload,
});

export const setLoginUser = (payload: UserData): ActionLoginUser => ({
    type: ActionTypeUser.Login,
    payload,
});

export const setUpdateAvatarUser = (): ActionUpdateAvatar => ({
    type: ActionTypeUser.UpdateAvatar,
});
