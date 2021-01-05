import { DeleteTwoTone } from '@ant-design/icons';
import React from 'react';
import { baseURL } from '../../../api/axios';
import css from './ShoppingCart.module.css';

export interface ICartItem {
    itemId: number;
    path_name: string;
    name: string;
    author: string;
    price: number;
    count: number;
    onClickCounter: (value: string | number | undefined, itemId: number, count: number) => void;
    onDeletePosition: (id: number) => void;
}

const CartItem: React.FC<ICartItem> = ({
    itemId,
    author,
    name,
    onClickCounter,
    onDeletePosition,
    path_name,
    price,
    count,
}: ICartItem) => {
    const increment = count + 1;
    const decrement = count - 1;

    return (
        <div className={css.shoppingCart__row}>
            <div>
                <img
                    className={css.shoppingCart__img}
                    src={baseURL + path_name ?? 'http://localhost:3000/download.png'}
                />
            </div>
            <div className={css.shoppingCart__text}>
                <h3>{name}</h3>
                <h3>by {author}</h3>
                <h4>price: {price} $</h4>
            </div>
            <div
                className={css.shoppingCart__incrementOrDecrement}
                onClick={() => onClickCounter(increment, itemId, count)}
            >
                +
            </div>
            <div className={css.shoppingCart__numbers}>{count}</div>
            <div
                className={css.shoppingCart__incrementOrDecrement}
                onClick={() => onClickCounter(decrement, itemId, count)}
            >
                -
            </div>
            <div>{price * count}$</div>
            <div>
                <DeleteTwoTone onClick={() => onDeletePosition(itemId)} style={{ fontSize: '25px' }} />
            </div>
        </div>
    );
};

export default CartItem;
