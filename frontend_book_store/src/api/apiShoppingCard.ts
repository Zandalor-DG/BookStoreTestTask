import { ProductModelInCard } from '../models/ShoppingCardStore/productModelInCard';
import axios from './axios';

export const getAllItemsCart = async (): Promise<ProductModelInCard[]> => {
    const res = await axios.get('/shoppingcart/all');
    const data: ProductModelInCard[] = res.data.productModelInCard;
    return data;
};

export const postAddItemCart = async (itemId: number): Promise<number> => {
    const res = await axios.post('shoppingcart/additem', { itemId });
    const id: number = res.data;
    return id;
};

export const postRemoveItemCart = async (itemId: number): Promise<number> => {
    const res = await axios.post('shoppingcart/removeitem', { itemId });
    const id: number = res.data;
    return id;
};

export const deleteDeleteItem = async (itemId: number): Promise<number> => {
    const res = await axios.delete('shoppingcart/deleteitem', { params: { itemId } });
    const id: number = res.data;
    return id;
};

export const deleteDeleteAllItems = async (): Promise<void> => {
    await axios.delete('shoppingcart/deleteallitems');
};
