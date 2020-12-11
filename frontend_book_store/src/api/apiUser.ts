import axios from './axios';
import { InputsLogin } from '../components/header/account/LoginAccount';
import { InputsRegister } from '../components/header/account/RegisterAccount';
import { UserData } from '../models/User/userData';

type LoginUser = {
    token: { accessToken: string };
    user: UserData;
};

export const loginUser = async (registerUser: InputsLogin): Promise<UserData> => {
    const resp = await axios.post('/auth/signin', registerUser);
    const data: LoginUser = resp.data;

    localStorage.setItem('token', data.token.accessToken);
    return data.user;
};

export const userAPI = {
    postRegisterUser(registerUser: InputsRegister) {
        return axios
            .post('/auth/signup', { user: registerUser })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
            });
    },

    postLoginUser({ email, password }: InputsLogin) {
        return axios
            .post('/auth/signin', { email, password })
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(`${res.status} bad request`);
                }
                localStorage.setItem('token', res.data.tokens.accessToken);
                return res.data.userData;
            })
            .catch((err) => {
                console.error(err);
            });
    },

    getProfilePageUser(id: number) {
        return axios
            .get(`user/profilePage/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
            });
    },

    putProfilePageUser(updateProfile: InputsRegister) {
        return axios
            .put(`user/profilePage/`, { updateProfile })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
            });
    },
};
