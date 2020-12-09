import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../FormProject/LoginForm/LoginForm';

interface PropsLoginAccount {
    loginUser: string;
    passwordUser: string;
    postLoginUser(loginUser: string, passwordUser: string): void;
}
type Props = { type: true } & { name: string };
type NeProps = { type: false } & { age: number };
type Common = Props | NeProps;
const foo = (opt: Common) => {
    if (opt.type) {
        return opt.name;
    }
    return opt.age;
};
const a: Common = {
    type: true,
};
const LoginAccount = () => {
    return (
        <div>
            <h2>Вход на сайт</h2>

            <NavLink to="/Register">Регистрация</NavLink>
            <LoginForm onSubmit={onLoginNewUser} />
        </div>
    );
};

export default LoginAccount;
