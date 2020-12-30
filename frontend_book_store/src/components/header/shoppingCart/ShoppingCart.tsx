import React, { useEffect } from 'react';
import css from './ShoppingCart.module.css';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import CartItem from './CartItem';
import {
    addItemCart,
    allItemsCart,
    deleteItemCart,
    removeItemCart,
} from '../../../store/shoppingCard/thunkShoppingCard';

const ShoppingCart: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: StateReduxType) => state.shoppingCardState.productInCart);

    useEffect(() => {
        dispatch(allItemsCart());
        console.log('useEffect');
    }, []);

    console.log('body');

    const onChange = (value: string | number | undefined, itemId: number, count: number) => {
        switch (value) {
            case 0:
                dispatch(deleteItemCart(itemId));
                break;
            case count + 1:
                dispatch(addItemCart(itemId));
                break;
            case count - 1:
                dispatch(removeItemCart(itemId));
                break;
            default:
                return;
        }
        console.log('changed', value);
    };

    const onDeletePosition = (id?: number) => {
        console.log(id);
    };

    const shoppingCart = data?.map((a) => {
        return (
            <CartItem
                key={a.id}
                itemId={a.bookId}
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

    return <div className={css.shoppingCart__column}>{shoppingCart}</div>;
};

export default React.memo(ShoppingCart);
