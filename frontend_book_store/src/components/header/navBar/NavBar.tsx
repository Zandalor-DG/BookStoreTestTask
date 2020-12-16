import React from 'react';
import css from './NavBar.module.css';
import Sandbox from '../account/modal/Sandbox';
import AccountPage from '../account/AccountPage';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import { NavLink } from 'react-router-dom';
import { ShoppingOutlined, UserDeleteOutlined, UserOutlined } from '@ant-design/icons';
import { userInitialState } from '../../../data/UserInitialState';
import { logOut } from '../../../store/userStore/actionCreatedUser';

const NavBar: React.FunctionComponent = () => {
    // const onlogOut = () => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('refreshToken');
    //     logOut();
    // };

    const user = useSelector((state: StateReduxType) => state.userState.user);
    const signOrProfilePage = !user ? (
        <Sandbox title="">
            <AccountPage />
        </Sandbox>
    ) : (
        <>
            <NavLink className={css.navLink} to="/profile">
                <UserOutlined style={{ fontSize: '30px' }} />
            </NavLink>

            <UserDeleteOutlined
                className={css.navLink}
                //onClick={onlogOut}
                style={{ fontSize: '30px', marginLeft: '40px' }}
            />
        </>
    );
    return (
        <div className={css.bookstore__navBar}>
            {signOrProfilePage}
            <NavLink className={css.navLink} to="/cart">
                <ShoppingOutlined style={{ fontSize: '30px' }} />
            </NavLink>
        </div>
    );
};

export default NavBar;
