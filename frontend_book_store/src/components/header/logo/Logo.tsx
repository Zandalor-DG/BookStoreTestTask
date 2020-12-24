import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

const Logo: React.FunctionComponent = () => {
    return (
        <div className={css.header__logo}>
            <NavLink to="/" className={css.header__linkLogo}>
                <img src="http://localhost:3000/myStore.png" alt="logo" className={css.header__img} />
            </NavLink>
        </div>
    );
};

export default Logo;
