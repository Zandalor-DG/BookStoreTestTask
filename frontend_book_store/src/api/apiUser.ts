import axios from './axios';
import { InputsLogin } from '../components/header/account/LoginAccount';
import { InputsRegister } from '../components/header/account/RegisterAccount';
import { UserData } from '../models/User/userData';

type UserDataAndToken = {
    token: { accessToken: string; refreshToken: string };
    userData: UserData;
};

export const postLoginUser = async (loginDataUser: InputsLogin): Promise<UserData> => {
    const res = await axios.post('/auth/signin', loginDataUser);
    const data: UserDataAndToken = res.data;
    localStorage.setItem('token', data.token.accessToken);
    localStorage.setItem('refreshToken', data.token.refreshToken);
    return data.userData;
};

export const postRegisterUser = async (registerDataUser: InputsRegister): Promise<void> => {
    const res = await axios.post('/auth/signup', registerDataUser);
    const data: UserDataAndToken = res.data;
    localStorage.setItem('token', data.token.accessToken);
    localStorage.setItem('refreshToken', data.token.refreshToken);
};

export const putProfilePage = async (profilePage: UserData): Promise<UserData> => {
    const res = await axios.put('/user/put', profilePage);
    const data: UserData = res.data;
    return data;
};

export const postLoginByToken = async (accessToken: string | null): Promise<UserData> => {
    const res = await axios.post('/auth/signinbytoken', accessToken);
    const data: UserData = res.data;
    return data;
};
