import React from 'react';
import { useForm } from 'react-hook-form';

interface Inputs {
    loginUser: string;
    passwordUser: string;
}

const LoginForm = () => {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const onSubmit = (data: any) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="loginUser">Введите Email</label>
            <input type="text" placeholder="Enter email pls" name="loginUser" ref={register({ required: true })} />
            {errors.loginUser && <span>This field is required</span>}
            <label htmlFor="passwordUser">Введите пароль</label>
            {errors.passwordUser && <span>This field is required</span>}
            <input type="password" placeholder="Password pls" name="passwordUser" />
            <input type="submit" />
        </form>
    );
};

export default LoginForm;
