import axios from 'axios';
import { InputsLogin } from '../components/header/account/LoginAccount';
import { InputsRegister } from '../components/header/account/RegisterAccount';

const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: { 'Content-Type': 'application/json', 'x-access-token': '' },
});

export const userAPI = {
    postRegisterUser(registerUser: InputsRegister) {
        return instance
            .post('users/signup', { user: registerUser })
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
            })
            .catch((err) => {
                console.error(err);
            });
    },

    postLoginUser(loginUser: InputsLogin) {
        return instance
            .post('user/signin')
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
            })
            .catch((err) => {
                console.error(err);
            });
    },

    getProfilePageUser(id: number) {
        return instance.get(`user/profilePage/${id}`).then((res) => {
            return res.data;
        });
    },

    putProfilePageUser(updateProfile: InputsRegister) {
        return instance.put(`user/profilePage`);
    },
};
