import React from 'react';
import css from './NavBar.module.css';
import Sandbox from '../../modal/Sandbox';
import AccountPage from '../account/AccountPage';
import ProfilePage from '../profilePage/ProfilePage';
import ShoppingCart from '../shoppingCart/ShoppengCart';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';

const NavBar: React.FunctionComponent = () => {
    const isAuthorized = useSelector<StateReduxType>((state) => state.userState.isAuthorized);
    const signOrProfilePage = !isAuthorized ? (
        <Sandbox title="" icon={'Sign In.png'}>
            <AccountPage />
        </Sandbox>
    ) : (
        <Sandbox title="Profile page" icon={'ProfilePage.png'}>
            <ProfilePage />
        </Sandbox>
    );
    return (
        <div className={css.bookstore__navBar}>
            {signOrProfilePage}
            <Sandbox title="" icon={'shopping-basket.png'}>
                <ShoppingCart />
            </Sandbox>
        </div>
    );
};

export default NavBar;
