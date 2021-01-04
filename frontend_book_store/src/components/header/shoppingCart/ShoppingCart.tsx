import 'antd/dist/antd.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import {
    addItemCart,
    deleteAllItems,
    deleteItemCart,
    removeItemCart,
} from '../../../store/shoppingCardStore/thunkShoppingCard';
import { sendTransactionItem } from '../../../store/transactionStore/thunkTransaction';
import BuyAllItemComponent from './BuyAllItemComponent';
import CartItem from './CartItem';
import DeleteAllItem from './DeleteAllItemComponent';
import css from './ShoppingCart.module.css';

const ShoppingCart: React.FC = () => {
    const dispatch: any = useDispatch();
    const data = useSelector((state: StateReduxType) => state.shoppingCardState.productInCart);
    let totalPrice = 0;

    // useEffect(() => {
    //     dispatch(allItemsCart());
    //     console.log('useEffect');
    // }, []);

    console.log('body');

    const onClickCounter = (value: string | number | undefined, itemId: number, count: number) => {
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
        const transactionName = new Date();
        dispatch(sendTransactionItem(transactionName)).then((resp: boolean) => {
            if (resp) {
                dispatch(deleteAllItems());
            } else {
                console.log('error');
            }
        });
        console.log('buyAll');
    };

    const shoppingCart = data?.map((a) => {
        totalPrice += a.Book.totalPrice;
        //setPriceAllItems(priceAllItems + a.Book.price);
        return (
            <React.Fragment key={a.id}>
                <CartItem
                    itemId={a.bookId}
                    name={a.Book.name}
                    author={a.Book.Author.name}
                    onClickCounter={onClickCounter}
                    onDeletePosition={onDeletePosition}
                    path_name={a.Book.File.path_name}
                    price={a.Book.price}
                    totalPrice={a.Book.totalPrice}
                    count={a.count}
                />
            </React.Fragment>
        );
    });

    const shoppingButton =
        data && data?.length > 0 ? (
            <div className={css.shoppingCart__button}>
                <DeleteAllItem onDeleteAllItem={onDeleteAllItem} />
                <BuyAllItemComponent totalPrice={totalPrice} onBuyAllItem={onBuyAllItem} />
            </div>
        ) : (
            <div>your cart is empty</div>
        );

    return (
        <div className={css.shoppingCart__column}>
            {shoppingCart}
            {shoppingButton}
        </div>
    );
};

export default React.memo(ShoppingCart);
