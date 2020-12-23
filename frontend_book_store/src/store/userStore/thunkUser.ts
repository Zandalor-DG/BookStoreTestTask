import {
    getLoginByToken,
    postChangePassword,
    postLoginUser,
    postRegisterUser,
    putUploadAvatar,
    putProfilePage,
} from '../../api/apiUser';
import { InputsLogin } from '../../components/header/account/LoginAccount';
import { InputsRegister } from '../../components/header/account/RegisterAccount';
import { onChangePassword } from '../../components/header/profilePage/ChangePassword';
import { UserData } from '../../models/User/userData';
import { userRole } from '../../models/User/userRoleEnum';
import { AppDispatch } from '../reducers';
import {
    setErrorUser,
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

export const loginUser = ({ email, password }: InputsLogin) => async (dispatch: AppDispatch): Promise<boolean> => {
    try {
        const user = await postLoginUser({ email, password });
        dispatch(setAuthorizedUser(user));
        return true;
    } catch (err) {
        dispatch(setErrorUser(err.message));
        return false;
    }
};

export const registerUser = ({ fullName, email, password, dob, roleId }: InputsRegister) => async (
    dispatch: AppDispatch,
): Promise<boolean> => {
    try {
        await postRegisterUser({ fullName, email, password, dob, roleId });
        const user = await getLoginByToken();
        dispatch(setAuthorizedUser(user));
        return true;
    } catch (err) {
        dispatch(setErrorUser(err.message));
        return false;
    }
};

export const updateUserData = ({ fullName, email, dob, id }: PropsUpdateUserData) => async (
    dispatch: AppDispatch,
): Promise<void> => {
    try {
        const user = await putProfilePage({ fullName, email, dob, id });
        dispatch(updateProfilePage(user));
    } catch (err) {
        dispatch(setErrorUser(err.message));
    }
};

export const loginUserByToken = () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const user = await getLoginByToken();
        dispatch(setInitialUser(user));
    } catch (err) {
        dispatch(setUserInitError(err.message));
    }
};

export const changePassword = ({ oldPassword, newPassword }: onChangePassword, user: UserData | null) => async (
    dispatch: AppDispatch,
): Promise<void> => {
    try {
        const userData = await postChangePassword({ oldPassword, newPassword }, user);
        dispatch(updateProfilePage(userData));
    } catch (err) {
        dispatch(setErrorUser(err.message));
    }
};

export const uploadAvatar = (formData: FormData) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const avatarUrl = await putUploadAvatar(formData);
        dispatch(setUserAvatar(avatarUrl));
    } catch (err) {
        dispatch(setErrorUser(err.message));
    }
};
