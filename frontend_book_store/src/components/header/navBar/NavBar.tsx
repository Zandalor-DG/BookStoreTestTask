import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';
import { ShoppingOutlined, TeamOutlined } from '@ant-design/icons';
// import Modal from 'antd/lib/modal/Modal';
import Sandbox from '../../modal/Sandbox';
import AccountPage from '../account/AccountPage';
import ProfilePage from '../profilePage/ProfilePage';
import ShoppingCart from '../shoppingCart/ShoppengCart';

// interface PropsNavBar {
//     isAuthorized: boolean;
// }
const NavBar: React.FunctionComponent = () => {
    //const state = useSelector<StateReduxType>((state) => state.userState);
    // const dispatch = useDispatch();
    const isAuthorized = false;
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
            {/* <NavLink className={css.navLink} to="">
                <ShoppingOutlined style={{ fontSize: '30px' }} />
            </NavLink> */}
            <Sandbox title="" icon={'shopping-basket.png'}>
                <ShoppingCart />
            </Sandbox>
        </div>
    );
};

export default NavBar;
