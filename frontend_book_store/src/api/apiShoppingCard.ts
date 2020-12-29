import { ShoppingCardState } from '../models/shoppingCardState';
import axios from './axios';

export const getAllItemsCard = async (): Promise<ShoppingCardState> => {
    const res = await axios.get('/shoppingcard/all');
    const data: ShoppingCardState = res.data;
    return data;
};

export const postAddItemCard = async (itemId: number): Promise<ShoppingCardState> => {
    const res = await axios.post('shoppingcard/additem', { itemId });
    const data: ShoppingCardState = res.data;
    return data;
};

export const postRemoveItemCard = async (itemId: number): Promise<ShoppingCardState> => {
    const res = await axios.post('shoppingcard/removeitem', { itemId });
    const data: ShoppingCardState = res.data;
    return data;
};

export const deleteDeleteAllItems = async (): Promise<void> => {
    await axios.delete('shoppingcard/removeallitems');
};

export const deleteDeleteItem = async (stackId: number): Promise<ShoppingCardState> => {
    const res = await axios.delete('shoppingcard/removeitem', { params: { stackId } });
    const data: ShoppingCardState = res.data;
    return data;
};
