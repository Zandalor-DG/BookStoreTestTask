import { AppDispatch } from '../reducers';
import { setErrorShoppingCart, setAddToCart, setAddItemCounter } from './actionCreatedShoppingCard';
import { getAllItemsCart, postAddItemCart } from '../../api/apiShoppingCard';

//export const allItemsCard;
export const addItemCart = (itemId: number) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const id = await postAddItemCart(itemId);
        dispatch(setAddItemCounter(id));
    } catch (err) {
        dispatch(setErrorShoppingCart(err.message));
    }
};

export const allItemsCart = () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const data = await getAllItemsCart();
        dispatch(setAddToCart(data));
    } catch (err) {
        dispatch(setErrorShoppingCart(err.message));
    }
};
