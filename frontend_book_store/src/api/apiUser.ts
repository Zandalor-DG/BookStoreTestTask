import axios from './axios';
import { InputsLogin } from '../components/header/account/LoginAccount';
import { InputsRegister } from '../components/header/account/RegisterAccount';
import { UserData } from '../models/User/userData';
import { PropsUpdateUserData } from '../store/userStore/thunkUser';
import { onChangePassword } from '../components/header/profilePage/ChangePassword';

type UserDataAndToken = {
    token: { accessToken: string; refreshToken: string };
    userData: UserData;
};

export const postLoginUser = async (loginDataUser: InputsLogin): Promise<UserData> => {
    const res = await axios.post('/account/signin', loginDataUser);
    const data: UserDataAndToken = res.data;
    localStorage.setItem('token', data.token.accessToken);
    localStorage.setItem('refreshToken', data.token.refreshToken);
    return data.userData;
};

export const postRegisterUser = async (registerDataUser: InputsRegister): Promise<void> => {
    const res = await axios.post('/account/signup', registerDataUser);
    const data: UserDataAndToken = res.data;
    localStorage.setItem('token', data.token.accessToken);
    localStorage.setItem('refreshToken', data.token.refreshToken);
};

export const putProfilePage = async (user: PropsUpdateUserData): Promise<UserData> => {
    const res = await axios.put('/user/putuser', { user });
    const data: UserData = res.data;
    return data;
};

export const getLoginByToken = async (): Promise<UserData> => {
    const res = await axios.get('/account/signinbytoken');
    const data: UserDataAndToken = res.data;
    localStorage.setItem('token', data.token.accessToken);
    return data.userData;
};

export const putUploadAvatar = async (formData: FormData): Promise<string> => {
    const res = await axios.post('/user/uploadavatar', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    const avatarUrl: string = res.data.avatar;
    return avatarUrl;
};

export const postChangePassword = async (
    { oldPassword, newPassword }: onChangePassword,
    user: UserData | null,
): Promise<UserData> => {
    const res = await axios.put('/user/putuser', { oldPassword, newPassword, user });
    const data: UserData = res.data.userData;
    return data;
};
