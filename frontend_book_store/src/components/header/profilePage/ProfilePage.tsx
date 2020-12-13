import { useForm } from 'react-hook-form';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserData } from '../../../models/User/userData';
import { StateReduxType } from '../../../store/reducers';
import { updateUserData } from '../../../store/userStore/thunkUser';
import css from './ProfilePage.module.css';

const ProfilePage: React.FunctionComponent = () => {
    const { fullName, email, dob, roleId } = useSelector((state: StateReduxType) => state.userState.user);
    const { register, handleSubmit, errors } = useForm<UserData>();
    const dispatch = useDispatch();
    const onSubmit = ({ fullName, email, password, dob, roleId }: UserData) => {
        dispatch(updateUserData({ fullName, email, password, dob, roleId }));
    };
    return (
        <div className={css.header__profilePage}>
            <h1 className="profilePage__title">Profile page</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={css.profilePage__form}>
                <label htmlFor="fullName">Name</label>
                <input
                    className={css.profilePage__input}
                    type="text"
                    placeholder="Enter name pls"
                    name="fullName"
                    defaultValue={fullName}
                    ref={register({ required: true })}
                />
                {errors.fullName && <span className={css.profilePage__error}>This field is required</span>}
                <label htmlFor="email">Email</label>
                <input
                    className={css.profilePage__input}
                    type="email"
                    placeholder="Enter email pls"
                    name="email"
                    defaultValue={email}
                    ref={register({ required: true })}
                />
                {errors.email && <span className={css.profilePage__error}>This field is required</span>}
                <label htmlFor="password">Password</label>
                <input
                    className={css.profilePage__input}
                    type="text"
                    placeholder="Enter password pls"
                    name="password"
                    defaultValue="********"
                    ref={register({ required: false })}
                />
                {errors.password && <span className={css.profilePage__error}>This field is required</span>}
                <label htmlFor="dob">Date of birthday</label>
                <input
                    className={css.profilePage__input}
                    type="date"
                    placeholder="Enter data of birth day pls"
                    name="dob"
                    defaultValue={dob as string | undefined}
                    ref={register({ required: true })}
                />
                {errors.dob && <span className={css.profilePage__error}>This field is required</span>}
                <label htmlFor="roleId">Role </label>
                <input
                    className={css.profilePage__input}
                    type="text"
                    placeholder="Enter role pls"
                    name="roleId"
                    defaultValue={roleId}
                    ref={register({ required: true })}
                />
                <input className={css.profilePage__submit} type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ProfilePage;
