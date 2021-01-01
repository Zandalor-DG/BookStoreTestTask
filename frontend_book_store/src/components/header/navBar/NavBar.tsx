import { ShoppingOutlined, UserDeleteOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { StateReduxType } from '../../../store/reducers';
import { logOut } from '../../../store/userStore/actionCreatedUser';
import AccountPage from '../account/AccountPage';
import Sandbox from '../account/modal/Sandbox';
import TransactionButton from '../transactionPage/TransactionButton';
import css from './NavBar.module.css';

const NavBar: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const onLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        dispatch(logOut());
    };

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

            <NavLink className={css.navLink} to="/transaction">
                <TransactionButton />
            </NavLink>

            <UserDeleteOutlined
                className={css.navLink}
                onClick={onLogOut}
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
