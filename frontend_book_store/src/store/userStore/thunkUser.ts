import {
    getLoginByToken,
    postChangePassword,
    postLoginUser,
    postRegisterUser,
    postUploadAvatar,
    putProfilePage,
} from '../../api/apiUser';
import { InputsLogin } from '../../components/header/account/LoginAccount';
import { InputsRegister } from '../../components/header/account/RegisterAccount';
import { onChangePassword } from '../../components/header/profilePage/ChangePassword';
import { UserData } from '../../models/User/userData';
import { userRole } from '../../models/User/userRoleEnum';
import { AppDispatch } from '../reducers';
import {
    setError,
    setAuthorizedUser,
    updateProfilePage,
    setInitialUser,
    setUserInitError,
    setUserAvatar,
} from '../userStore/actionCreatedUser';

export interface PropsUpdateUserData {
    id: number;
    fullName: string;
    email: string;
    dob: Date;
    roleId?: userRole;
}

export const loginUser = ({ email, password }: InputsLogin) => async (dispatch: AppDispatch) => {
    try {
        const user = await postLoginUser({ email, password });
        dispatch(setAuthorizedUser(user));
    } catch (err) {
        dispatch(setError(err.message));
    }
};

export const registerUser = ({ fullName, email, password, dob, roleId }: InputsRegister) => async (
    dispatch: AppDispatch,
) => {
    try {
        await postRegisterUser({ fullName, email, password, dob, roleId });
        const user = await getLoginByToken();
        dispatch(setAuthorizedUser(user));
    } catch (err) {
        dispatch(setError(err.message));
    }
};

export const updateUserData = ({ fullName, email, dob, id }: PropsUpdateUserData) => async (dispatch: AppDispatch) => {
    try {
        const user = await putProfilePage({ fullName, email, dob, id });
        dispatch(updateProfilePage(user));
    } catch (err) {
        dispatch(setError(err.message));
    }
};

export const loginUserByToken = () => async (dispatch: AppDispatch) => {
    try {
        const user = await getLoginByToken();
        dispatch(setInitialUser(user));
    } catch (err) {
        dispatch(setUserInitError(err.message));
    }
};

export const changePassword = ({ oldPassword, newPassword }: onChangePassword, user: UserData | null) => async (
    dispatch: AppDispatch,
) => {
    try {
        const userData = await postChangePassword({ oldPassword, newPassword }, user);
        dispatch(updateProfilePage(userData));
    } catch (err) {
        dispatch(setError(err.message));
    }
};

export const uploadAvatar = (formData: FormData) => async (dispatch: AppDispatch) => {
    try {
        const avatarUrl = await postUploadAvatar(formData);
        dispatch(setUserAvatar(avatarUrl));
    } catch (err) {
        dispatch(setError(err.message));
    }
};
