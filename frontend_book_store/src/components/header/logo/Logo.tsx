import React from 'react';
import css from './Logo.module.css';

const Logo: React.FunctionComponent = () => {
    return (
        <div className={css.header__logo}>
            <a href="!" className={css.header__linkLogo}>
                <img src="myStore.png" alt="logo" className={css.header__img} />
            </a>
        </div>
    );
};

export default Logo;
