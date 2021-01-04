import { ProductModelInCard } from '../../models/ShoppingCardStore/productModelInCard';
import {
    ActionAddItemCounter,
    ActionAddToCard,
    ActionBuyItems,
    ActionDeleteAllItemsCard,
    ActionDeleteToCard,
    ActionRemoveItemCounter,
    ActionSetErrorShoppingCard,
    ActionSetItemCart,
    ActionTypeShoppingCard,
} from './actionTypesShoppingCard';

export const setAddToCart = (products: ProductModelInCard[]): ActionAddToCard => ({
    type: ActionTypeShoppingCard.AddToCart,
    products,
});

export const setItemCart = (product: ProductModelInCard): ActionSetItemCart => ({
    type: ActionTypeShoppingCard.SetItemCart,
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
