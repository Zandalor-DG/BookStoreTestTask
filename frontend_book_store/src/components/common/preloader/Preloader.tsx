import React from 'react';
import css from './Preloader.module.css';

const Preloader: React.FC = () => {
    return (
        <div className={css.bookStore__preloader}>
            <div className={css.preloader__row}>
                <img className={css.preloader__img} src="http://localhost:3000/preloader.svg" />
            </div>
        </div>
    );
};

export default Preloader;
