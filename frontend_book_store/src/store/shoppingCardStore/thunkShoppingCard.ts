import {
    deleteDeleteAllItems,
    deleteDeleteItem,
    getAllItemsCart,
    postAddItemCart,
    postRemoveItemCart,
} from '../../api/apiShoppingCard';
import { AppDispatch } from '../reducers';
import {
    setAddItemCounter,
    setAddToCart,
    setDeleteAllItemsCart,
    setDeleteToCart,
    setErrorShoppingCart,
    setRemoveItemCounter,
} from './actionCreatedShoppingCard';

export const allItemsCart = () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const data = await getAllItemsCart();
        dispatch(setAddToCart(data));
    } catch (err) {
        dispatch(setErrorShoppingCart(err.message));
    }
};

export const addItemCart = (itemId: number, value?: number) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const id = await postAddItemCart(itemId, value);
        dispatch(setAddItemCounter(id));
    } catch (err) {
        dispatch(setErrorShoppingCart(err.message));
    }
};

export const removeItemCart = (itemId: number, value?: number) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const id = await postRemoveItemCart(itemId, value);
        dispatch(setRemoveItemCounter(id));
    } catch (err) {
        dispatch(setErrorShoppingCart(err.message));
    }
};

export const deleteItemCart = (itemId: number) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const id = await deleteDeleteItem(itemId);
        dispatch(setDeleteToCart(id));
    } catch (err) {
        dispatch(setErrorShoppingCart(err.message));
    }
};

export const deleteAllItems = () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        await deleteDeleteAllItems();
        dispatch(setDeleteAllItemsCart());
    } catch (err) {
        dispatch(setErrorShoppingCart(err.message));
    }
};
