import { ProductModelInCard } from '../../models/ShoppingCardStore/productModelInCard';
import {
    ActionAddItemCounter,
    ActionAddToCard,
    ActionBuyItems,
    ActionDeleteAllItemsCard,
    ActionDeleteToCard,
    ActionRemoveItemCounter,
    ActionSetErrorShoppingCard,
    ActionTypeShoppingCard,
} from './actionTypesShoppingCard';

export const setAddToCart = (product: ProductModelInCard[]): ActionAddToCard => ({
    type: ActionTypeShoppingCard.AddToCard,
    product,
});

export const setAddItemCounter = (id: number): ActionAddItemCounter => ({
    type: ActionTypeShoppingCard.AddItemCounter,
    id,
});

export const setRemoveItemCounter = (id: number): ActionRemoveItemCounter => ({
    type: ActionTypeShoppingCard.RemoveItemCounter,
    id,
});

export const setDeleteToCart = (id: number): ActionDeleteToCard => ({
    type: ActionTypeShoppingCard.DeleteToCard,
    id,
});

export const setDeleteAllItemsCart = (): ActionDeleteAllItemsCard => ({
    type: ActionTypeShoppingCard.DeleteAllItemsCard,
});

export const setBuyItems = (): ActionBuyItems => ({
    type: ActionTypeShoppingCard.BuyItems,
});

export const setErrorShoppingCart = (error: string): ActionSetErrorShoppingCard => ({
    type: ActionTypeShoppingCard.SetError,
    error,
});
