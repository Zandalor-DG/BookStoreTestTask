import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../FormProject/LoginForm/LoginForm';

interface PropsLoginAccount {
    loginUser: string;
    passwordUser: string;
    postLoginUser(loginUser: string, passwordUser: string): void;
}

const LoginAccount: React.FunctionComponent<PropsLoginAccount> = ({ postLoginUser }: PropsLoginAccount) => {
    const onLoginNewUser = ({ loginUser, passwordUser }) => {
        postLoginUser({ loginUser, passwordUser });
    };

    return (
        <div>
            <h2>Вход на сайт</h2>

            <NavLink to="/Register">Регистрация</NavLink>
            <br />
            <br />
            <br />
            <LoginForm onSubmit={onLoginNewUser} />
        </div>
    );
};

export default LoginAccount;
