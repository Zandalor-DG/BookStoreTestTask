import { useForm } from 'react-hook-form';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserData } from '../../../models/User/userData';
import { StateReduxType } from '../../../store/reducers';
import { updateUserData } from '../../../store/userStore/thunkUser';

const ProfilePage: React.FunctionComponent = () => {
    const { fullName, email, password, dob, roleId } = useSelector((state: StateReduxType) => state.userState.user);
    const { register, handleSubmit, errors } = useForm<UserData>();
    const dispatch = useDispatch();
    const onSubmit = ({ fullName, email, password, dob, roleId }: UserData) => {
        dispatch(updateUserData({ fullName, email, password, dob, roleId }));
    };
    return (
        <div className="header__profilePage">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Enter name pls"
                    name="fullName"
                    defaultValue={fullName}
                    ref={register({ required: true })}
                />
                {errors.fullName && <span>This field is required</span>}
                <input
                    type="text"
                    placeholder="Enter email pls"
                    name="email"
                    defaultValue={email}
                    ref={register({ required: true })}
                />
                {errors.email && <span>This field is required</span>}
                <input
                    type="text"
                    placeholder="Enter password pls"
                    name="password"
                    defaultValue={password}
                    ref={register({ required: false })}
                />
                {errors.password && <span>This field is required</span>}
                <input
                    type="text"
                    placeholder="Enter data of birth day pls"
                    name="dob"
                    defaultValue={typeof dob}
                    ref={register({ required: true })}
                />
                {errors.dob && <span>This field is required</span>}
                <input
                    type="text"
                    placeholder="Enter role pls"
                    name="roleId"
                    defaultValue={roleId}
                    ref={register({ required: true })}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default ProfilePage;
