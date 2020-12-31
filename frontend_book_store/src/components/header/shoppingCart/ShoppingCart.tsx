import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import {
    addItemCart,
    allItemsCart,
    deleteItemCart,
    removeItemCart,
} from '../../../store/shoppingCard/thunkShoppingCard';
import CartItem from './CartItem';
import css from './ShoppingCart.module.css';

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
                dispatch(addItemCart(itemId, value));
                break;
            case count - 1:
                dispatch(removeItemCart(itemId, value));
                break;
            default:
                return;
        }
        console.log('changed', value);
    };

    const onDeletePosition = (id: number) => {
        dispatch(deleteItemCart(id));
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
