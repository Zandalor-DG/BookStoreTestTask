import { getAllNotifications } from '../../api/apiNotification';
import { getAllItemsCart } from '../../api/apiShoppingCard';
import {
    getLoginByToken,
    postChangePassword,
    postLoginUser,
    postRegisterUser,
    putProfilePage,
    putUploadAvatar,
} from '../../api/apiUser';
import { InputsLogin } from '../../components/header/account/LoginAccount';
import { InputsRegister } from '../../components/header/account/RegisterAccount';
import { onChangePassword } from '../../components/header/profilePage/ChangePassword';
import { UserData } from '../../models/User/userData';
import { userRole } from '../../models/User/userRoleEnum';
import { addAllNotifications } from '../notificationStore/actionCreatedNotification';
import { AppDispatch } from '../reducers';
import { setAddToCart } from '../shoppingCardStore/actionCreatedShoppingCard';
import {
    setAuthorizedUser,
    setErrorUser,
    setInitialUser,
    setUserAvatar,
    setUserInitError,
    updateProfilePage,
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
        const data = await getAllItemsCart();
        dispatch(setAddToCart(data));
        const notifications = await getAllNotifications();
        dispatch(addAllNotifications(notifications));
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
        const data = await getAllItemsCart();
        dispatch(setAddToCart(data));
        const notifications = await getAllNotifications();
        dispatch(addAllNotifications(notifications));
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
