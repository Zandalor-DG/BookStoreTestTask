import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

export interface InputsLogin {
    loginUser: string;
    passwordUser: string;
}

const LoginAccount: React.FunctionComponent = () => {
    const { register, handleSubmit, watch, errors } = useForm<InputsLogin>();
    const onSubmit = (data: InputsLogin) => console.log(data);
    // console.log(watch('loginUser'));
    return (
        <div>
            <h2>Sign In</h2>

            <NavLink to="/signup">Sign Up</NavLink>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="loginUser">enter Email</label>
                <input type="text" placeholder="Enter email pls" name="loginUser" ref={register({ required: true })} />
                {errors.loginUser && <span>This field is required</span>}
                <label htmlFor="passwordUser">enter password</label>
                <input
                    type="password"
                    placeholder="Password pls"
                    name="passwordUser"
                    ref={register({ required: true })}
                />
                {errors.passwordUser && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default LoginAccount;
