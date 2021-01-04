import { ProductModelInCard } from '../models/ShoppingCardStore/productModelInCard';
import axios from './axios';

export const getAllItemsCart = async (): Promise<ProductModelInCard[]> => {
    const res = await axios.get('/shoppingcart/all');
    const data: ProductModelInCard[] = res.data.productModelInCart;
    return data;
};

export const postAddOneItemCart = async (bookId: number): Promise<ProductModelInCard> => {
    const res = await axios.post('shoppingcart/addoneitem', { bookId });
    const data: ProductModelInCard = res.data.productModelInCart;
    return data;
};

export const postAddItemCount = async (itemId: number, value?: number): Promise<number> => {
    const res = await axios.post('shoppingcart/additem', { itemId, value });
    const id: number = res.data.id;
    return id;
};

export const postRemoveItemCount = async (itemId: number, value?: number): Promise<number> => {
    const res = await axios.post('shoppingcart/removeitem', { itemId, value });
    const id: number = res.data.id;
    return id;
};

export const deleteDeleteItem = async (itemId: number): Promise<number> => {
    const res = await axios.delete('shoppingcart/deleteitem', { params: { itemId } });
    const id: number = res.data.id;
    return id;
};

export const deleteDeleteAllItems = async (): Promise<void> => {
    await axios.delete('shoppingcart/deleteallitems');
};
