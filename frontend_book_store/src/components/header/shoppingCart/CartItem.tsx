import { DeleteTwoTone } from '@ant-design/icons';
import { InputNumber } from 'antd';
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
    onChange: (value: string | number | undefined, itemId: number, count: number) => void;
    onDeletePosition: (id: number) => void;
}

const CartItem: React.FC<ICartItem> = ({
    itemId,
    author,
    name,
    onChange,
    onDeletePosition,
    path_name,
    price,
    count,
}: ICartItem) => {
    const onChangeValue = (value: number | string | undefined) => {
        return onChange(value, itemId, count);
    };

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
                <InputNumber min={0} max={50} defaultValue={count} onChange={onChangeValue} />
            </div>
            <div>{price * count}</div>
            <div>
                <DeleteTwoTone onClick={() => onDeletePosition(itemId)} style={{ fontSize: '25px' }} />
            </div>
        </div>
    );
};

export default CartItem;
