import React, { useEffect } from 'react';
import css from './ShoppingCart.module.css';
import { InputNumber } from 'antd';
import 'antd/dist/antd.css';
import { DeleteTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllItemsCart } from '../../../api/apiShoppingCard';
import { StateReduxType } from '../../../store/reducers';
import CartItem from './CartItem';

const ShoppingCart: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllItemsCart());
    }, []);

    const data = useSelector((state: StateReduxType) => state.shoppingCardState.productInCart);

    const onChange = (value: string | number | undefined) => {
        console.log('changed', value);
    };

    const onDeletePosition = (id?: number) => {
        console.log(id);
    };

    const shoppingCart = data?.map((a) => {
        return (
            <CartItem
                key={a.id}
                name={a.Book.name}
                author={a.Book.Author.name}
                onChange={onChange}
                onDeletePosition={onDeletePosition}
                path_name={a.Book.File.path_name}
                price={a.Book.price}
                count={a.count}
            />
        );
    });

    return (
        <div className={css.shoppingCart__column}>
            <div className={css.shoppingCart__row}>
                <div>
                    <img className={css.shoppingCart__img} src={'http://localhost:3000/download.png'} />
                </div>
                <div className={css.shoppingCart__text}>name</div>
                <div>
                    <InputNumber min={0} max={10} defaultValue={3} onChange={onChange} />
                </div>
                <div>total price</div>
                <div>
                    <DeleteTwoTone onClick={() => onDeletePosition()} style={{ fontSize: '25px' }} />
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
