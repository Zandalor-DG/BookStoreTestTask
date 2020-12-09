import React from 'react';
import Logo from './logo/Logo';
import NavBar from './navBar/NavBar';
import SearchHeader from './search/SearchHeader';

const Header: React.FunctionComponent = () => {
    return (
        <div className="bookstore__wrapper">
            <Logo />
            <SearchHeader />
            <NavBar />
        </div>
    );
};

export default Header;
