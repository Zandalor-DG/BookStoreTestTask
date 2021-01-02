import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import {
    addItemCart,
    allItemsCart,
    deleteAllItems,
    deleteItemCart,
    removeItemCart,
} from '../../../store/shoppingCardStore/thunkShoppingCard';
import BuyAllItemComponent from './BuyAllItemComponent';
import CartItem from './CartItem';
import DeleteAllItem from './DeleteAllItemComponent';
import css from './ShoppingCart.module.css';

const ShoppingCart: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: StateReduxType) => state.shoppingCardState.productInCart);
    let totalPrice = 0;

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

    const onDeleteAllItem = () => {
        dispatch(deleteAllItems());
    };

    const onBuyAllItem = () => {
        console.log('buyAll');
    };

    const shoppingCart = data?.map((a) => {
        totalPrice += a.Book.totalPrice;
        //setPriceAllItems(priceAllItems + a.Book.price);
        return (
            <>
                <CartItem
                    key={a.id}
                    itemId={a.bookId}
                    name={a.Book.name}
                    author={a.Book.Author.name}
                    onChange={onChange}
                    onDeletePosition={onDeletePosition}
                    path_name={a.Book.File.path_name}
                    price={a.Book.price}
                    totalPrice={a.Book.totalPrice}
                    count={a.count}
                />
            </>
        );
    });

    const shoppingButton =
        data?.length === 0 ? (
            <div>your cart is empty</div>
        ) : (
            <div className={css.shoppingCart__button}>
                <DeleteAllItem onDeleteAllItem={onDeleteAllItem} />
                <BuyAllItemComponent totalPrice={totalPrice} onBuyAllItem={onBuyAllItem} />
            </div>
        );

    return (
        <div className={css.shoppingCart__column}>
            {shoppingCart}
            {shoppingButton}
        </div>
    );
};

export default React.memo(ShoppingCart);
