import { AppDispatch } from '../reducers';
import {
    setErrorShoppingCart,
    setAddToCart,
    setAddItemCounter,
    setDeleteToCart,
    setRemoveItemCounter,
    setDeleteAllItemsCart,
} from './actionCreatedShoppingCard';
import {
    deleteDeleteAllItems,
    deleteDeleteItem,
    getAllItemsCart,
    postAddItemCart,
    postRemoveItemCart,
} from '../../api/apiShoppingCard';

export const allItemsCart = () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const data = await getAllItemsCart();
        dispatch(setAddToCart(data));
    } catch (err) {
        dispatch(setErrorShoppingCart(err.message));
    }
};

export const addItemCart = (itemId: number) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const id = await postAddItemCart(itemId);
        dispatch(setAddItemCounter(id));
    } catch (err) {
        dispatch(setErrorShoppingCart(err.message));
    }
};

export const removeItemCart = (itemId: number) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const id = await postRemoveItemCart(itemId);
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
