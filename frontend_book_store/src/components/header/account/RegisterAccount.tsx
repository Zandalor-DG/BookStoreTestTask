import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../api/apiUser';
import { userRole } from '../../../models/User/userRoleEnum';

export interface InputsRegister {
    fullName: string;
    email: string;
    password: string;
    dob: Date;
    roleId: userRole;
    confirmPasswordUser?: string;
}

const RegisterAccount: React.FunctionComponent = () => {
    const { register, handleSubmit, watch, errors } = useForm<InputsRegister>();
    const dispatch = useDispatch();
    const onSubmit = ({ fullName, email, password, dob }: InputsRegister) => {
        dispatch(registerUser({ fullName, email, password, dob, roleId: userRole.user }));
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="loginUser">Enter your email</label>
                <input type="text" placeholder="Enter email" name="loginUser" ref={register({ required: true })} />
                {errors.fullName && <span>Please enter your login</span>}

                <label htmlFor="emailUser">Enter your email</label>
                <input type="text" placeholder="Enter email" name="emailUser" ref={register({ required: true })} />
                {errors.email && <span>Please enter your email</span>}

                <label htmlFor="dateOfBirthdayUser">Enter your date of birthday</label>
                <input
                    type="text"
                    placeholder="Enter date of birthday"
                    name="dateOfBirthdayUser"
                    ref={register({ required: true })}
                />
                {errors.dob && <span>Please enter your date of birthday</span>}

                <label htmlFor="passwordUser">Enter password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    name="passwordUser"
                    ref={register({ required: true })}
                />
                {errors.password && <span>Please enter your password</span>}

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
