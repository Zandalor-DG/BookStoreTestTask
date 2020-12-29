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
