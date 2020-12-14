import { getLoginByToken, postLoginUser, postRegisterUser, putProfilePage } from '../../api/apiUser';
import { InputsLogin } from '../../components/header/account/LoginAccount';
import { UserData } from '../../models/User/userData';
import { AppDispatch } from '../reducers';
import { setError, setAuthorizedUser, updateProfilePage } from '../userStore/actionCreatedUser';

export const loginUser = ({ email, password }: InputsLogin) => async (dispatch: AppDispatch) => {
    try {
        const user = await postLoginUser({ email, password });
        dispatch(setAuthorizedUser(user));
    } catch (err) {
        dispatch(setError(err.message));
    }
};

export const registerUser = ({ fullName, email, password, dob, roleId }: UserData) => async (dispatch: AppDispatch) => {
    try {
        await postRegisterUser({ fullName, email, password, dob, roleId });
        const user = await getLoginByToken();
        dispatch(setAuthorizedUser(user));
    } catch (err) {
        dispatch(setError(err.message));
    }
};

export const updateUserData = ({ fullName, email, password, dob, roleId }: UserData) => async (
    dispatch: AppDispatch,
) => {
    try {
        const user = await putProfilePage({ fullName, email, password, dob, roleId });
        dispatch(updateProfilePage(user));
    } catch (err) {
        dispatch(setError(err.message));
    }
};

export const loginUserByToken = () => async (dispatch: AppDispatch) => {
    try {
        const accessToken = localStorage.getItem('token');
        const user = await getLoginByToken();
        dispatch(setAuthorizedUser(user));
    } catch (err) {
        dispatch(setError(err.message));
    }
};
