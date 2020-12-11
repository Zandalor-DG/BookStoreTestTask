import React from 'react';
import { useForm } from 'react-hook-form';

export interface InputsRegister {
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
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="loginUser">Enter your email</label>
                <input type="text" placeholder="Enter email" name="loginUser" ref={register({ required: true })} />
                {errors.loginUser && <span>Please enter your login</span>}

                <label htmlFor="emailUser">Enter your email</label>
                <input type="text" placeholder="Enter email" name="emailUser" ref={register({ required: true })} />
                {errors.emailUser && <span>Please enter your email</span>}

                <label htmlFor="dateOfBirthdayUser">Enter your date of birthday</label>
                <input
                    type="text"
                    placeholder="Enter date of birthday"
                    name="dateOfBirthdayUser"
                    ref={register({ required: true })}
                />
                {errors.dateOfBirthdayUser && <span>Please enter your date of birthday</span>}

                <label htmlFor="passwordUser">Enter password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    name="passwordUser"
                    ref={register({ required: true })}
                />
                {errors.passwordUser && <span>Please enter your password</span>}

                <label htmlFor="confirmPasswordUser">Repeat password</label>
                <input
                    type="password"
                    placeholder="Repeat password"
                    name="confirmPasswordUser"
                    ref={register({ required: true })}
                />
                {errors.confirmPasswordUser && <span>Please repeat password</span>}

                <input type="submit" />
            </form>
        </>
    );
};

export default RegisterAccount;
