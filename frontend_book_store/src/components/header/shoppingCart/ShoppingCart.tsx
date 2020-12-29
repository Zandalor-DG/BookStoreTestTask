import React from 'react';
import css from './ShoppingCard.module.css';

const ShoppingCart: React.FC = () => {
    return (
        <div className={css.shoppingCard__wrapper}>
            <div>file</div>
            <div>name</div>
            <div>+</div>
            <div>count</div>
            <div>-</div>
            <div>buy</div>
        </div>
    );
};

export default ShoppingCart;
