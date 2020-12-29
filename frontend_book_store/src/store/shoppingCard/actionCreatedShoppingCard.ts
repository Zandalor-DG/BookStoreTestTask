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

export const setAddToCard = (product: ProductModelInCard): ActionAddToCard => ({
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

export const setDeleteToCard = (id: number): ActionDeleteToCard => ({
    type: ActionTypeShoppingCard.DeleteToCard,
    id,
});

export const setDeleteAllItemsCard = (): ActionDeleteAllItemsCard => ({
    type: ActionTypeShoppingCard.DeleteAllItemsCard,
});

export const setBuyItems = (): ActionBuyItems => ({
    type: ActionTypeShoppingCard.BuyItems,
});

export const setErrorShoppingCard = (error: string): ActionSetErrorShoppingCard => ({
    type: ActionTypeShoppingCard.SetError,
    error,
});
