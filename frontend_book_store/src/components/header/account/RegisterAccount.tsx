import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

interface InputsRegister {
    loginUser: string;
    emailUser: string;
    passwordUser: string;
    confirmPasswordUser: string;
    dateOfBirthdayUser: Date;
}

const RegisterAccount: React.FunctionComponent = () => {
    const { register, handleSubmit, watch, errors } = useForm<InputsRegister>();
    const onSubmit = (data: InputsRegister) => console.log(data);
    console.log(watch('loginUser'));

    return (
        <div>
            <h2>Sign Up</h2>

            <NavLink to="/signin">Sign In</NavLink>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="loginUser">Enter your email</label>
                <input type="text" placeholder="Enter email" name="loginUser" ref={register({ required: true })} />
                {errors.loginUser && <span>Please enter your login</span>}

                <label htmlFor="emailUser">Enter your email</label>
                <input type="text" placeholder="Enter email" name="emailUser" />
                {errors.emailUser && <span>Please enter your email</span>}

                <label htmlFor="dateOfBirthdayUser">Enter your date of birthday</label>
                <input type="text" placeholder="Enter date of birthday" name="dateOfBirthdayUser" />
                {errors.dateOfBirthdayUser && <span>Please enter your date of birthday</span>}

                <label htmlFor="passwordUser">Enter password</label>
                <input type="password" placeholder="Enter password" name="passwordUser" />
                {errors.passwordUser && <span>Please enter your password</span>}

                <label htmlFor="confirmPasswordUser">Repeat password</label>
                <input type="password" placeholder="Repeat password" name="confirmPasswordUser" />
                {errors.confirmPasswordUser && <span>Please repeat password</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default RegisterAccount;
