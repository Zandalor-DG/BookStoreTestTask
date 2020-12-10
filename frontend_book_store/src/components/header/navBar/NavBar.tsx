import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';
import { TeamOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';

// interface PropsNavBar {
//     isAuthorized: boolean;
// }
const NavBar: React.FunctionComponent = () => {
    const isAuthorized = false;
    const signOrProfilePage = !isAuthorized ? (
        <NavLink className={css.navLink} to="/signin">
            <TeamOutlined style={{ fontSize: '30px' }} />
        </NavLink>
    ) : (
        <NavLink className={css.navLink} to="/profilepage">
            <UserOutlined style={{ fontSize: '30px' }} />
        </NavLink>
    );
    return (
        <div className={css.bookstore__navBar}>
            {signOrProfilePage}
            <NavLink className={css.navLink} to="">
                <ShoppingOutlined style={{ fontSize: '30px' }} />
            </NavLink>
        </div>
    );
};

export default NavBar;
