import React from 'react';
import { NavLink } from 'react-router-dom';

// interface PropsNavBar {
//     isAuthorized: boolean;
// }
const NavBar: React.FunctionComponent = () => {
    const isAuthorized = false;
    const signOrProfilePage = !isAuthorized ? (
        <NavLink to="/signin">signIn</NavLink>
    ) : (
        <NavLink to="/profilepage">profilePage</NavLink>
    );
    return (
        <div className="bookstore__navBar">
            {signOrProfilePage}
            <NavLink to="">shoppingCart</NavLink>
        </div>
    );
};

export default NavBar;
