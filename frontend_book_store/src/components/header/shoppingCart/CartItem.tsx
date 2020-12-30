import React from 'react';
import css from './ShoppingCart.module.css';
import { InputNumber } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import { baseURL } from '../../../api/axios';

export interface ICartItem {
    onChange: (value: string | number | undefined) => void;
    path_name: string;
    name: string;
    author: string;
    price: number;
    count: number;
    onDeletePosition: (id?: number | undefined) => void;
}

const CartItem: React.FC<ICartItem> = ({
    author,
    name,
    onChange,
    onDeletePosition,
    path_name,
    price,
    count,
}: ICartItem) => {
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
            <div>
                <InputNumber min={0} max={50} defaultValue={count} onChange={onChange} />
            </div>
            <div>{price * count}</div>
            <div>
                <DeleteTwoTone onClick={() => onDeletePosition()} style={{ fontSize: '25px' }} />
            </div>
        </div>
    );
};

export default CartItem;
