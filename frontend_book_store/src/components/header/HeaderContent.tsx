import React from 'react';
import Logo from './logo/Logo';
import NavBar from './navBar/NavBar';
import SearchHeader from './search/SearchHeader';
import css from './HeaderContent.module.css';

const HeaderContent: React.FunctionComponent = () => {
    return (
        <div className={css.headerContent}>
            <Logo />
            <SearchHeader />
            <NavBar />
        </div>
    );
};

export default HeaderContent;
