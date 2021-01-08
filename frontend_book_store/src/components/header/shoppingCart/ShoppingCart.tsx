import 'antd/dist/antd.css';
import React, { useState } from 'react';
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
    const [disableButton, setDisableButton] = useState(false);
    const totalPrice = React.useMemo(() => {
        if (!data) return 0;
        return data.reduce((acc, curr) => {
            return acc + curr.Book.totalPrice;
        }, 0);
    }, [data]);

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
    };

    const onDeletePosition = (id: number) => {
        dispatch(deleteItemCart(id));
    };

    const onDeleteAllItem = () => {
        setDisableButton(true);
        dispatch(deleteAllItems()).then((resp: boolean) => {
            if (resp) {
                setDisableButton(false);
            } else {
                setDisableButton(false);
            }
        });
    };

    const onBuyAllItem = () => {
        setDisableButton(true);
        const transactionName = new Date();
        dispatch(sendTransactionItem(transactionName)).then((resp: boolean) => {
            if (resp) {
                dispatch(deleteAllItems());
                setDisableButton(false);
            } else {
                console.log('error');
                setDisableButton(false);
            }
        });
    };

    const shoppingCart = data?.map((a) => {
        // totalPrice += a.Book.totalPrice;
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
                    count={a.count}
                />
            </React.Fragment>
        );
    });

    const shoppingButton =
        data && data?.length > 0 ? (
            <div className={css.shoppingCart__button}>
                <DeleteAllItem onDeleteAllItem={onDeleteAllItem} disableButton={disableButton} />
                <BuyAllItemComponent
                    totalPrice={totalPrice}
                    onBuyAllItem={onBuyAllItem}
                    disableButton={disableButton}
                />
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
