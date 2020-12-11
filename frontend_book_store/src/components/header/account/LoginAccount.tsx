import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postLoginUser } from '../../../store/userStore/thunkUser';

export interface InputsLogin {
    email: string;
    password: string;
}

const LoginAccount: React.FunctionComponent = () => {
    const { register, handleSubmit, errors } = useForm<InputsLogin>();
    const dispatch = useDispatch();
    const onSubmit = ({ email, password }: InputsLogin) => {
        dispatch(postLoginUser({ email, password }));
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">enter Email</label>
                <input type="text" placeholder="Enter email pls" name="email" ref={register({ required: true })} />
                {errors.email && <span>This field is required</span>}
                <label htmlFor="password">enter password</label>
                <input type="password" placeholder="Password pls" name="password" ref={register({ required: true })} />
                {errors.password && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </>
    );
};

export default LoginAccount;
