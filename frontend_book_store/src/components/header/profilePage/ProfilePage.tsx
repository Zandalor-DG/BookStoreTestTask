import React from 'react';
import css from './ProfilePage.module.css';
import UploadAvatar from './UploadAvatar';
import ChangePassword from './ChangePassword';
import ProfileUser from './ProfileUser';

const ProfilePage: React.FC = () => {
    return (
        <>
            <h3 className={css.profilePage__title}>Your photo</h3>

            <UploadAvatar />

            <h3 className={css.profilePage__title}>Your data</h3>

            <ProfileUser />

            <h3 className={css.profilePage__title}>Change password</h3>

            <ChangePassword />
        </>
    );
};

export default ProfilePage;
