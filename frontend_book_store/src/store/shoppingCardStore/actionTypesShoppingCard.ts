import { ProductModelInCard as ProductModelInCard } from '../../models/ShoppingCardStore/productModelInCard';

export enum ActionTypeShoppingCard {
    AddToCard = 'AddToCard',
    AddItemCounter = 'AddItemCounter',
    RemoveItemCounter = 'RemoveItemCounter',
    DeleteToCard = 'DeleteToCard',
    BuyItems = 'BuyItems',
    DeleteAllItemsCard = 'DeleteAllItemsCard',
    SetError = 'SetError',
}

export type ActionAddToCard = {
    type: ActionTypeShoppingCard.AddToCard;
    product: ProductModelInCard[];
};

export type ActionAddItemCounter = {
    type: ActionTypeShoppingCard.AddItemCounter;
    id: number;
};

export type ActionRemoveItemCounter = {
    type: ActionTypeShoppingCard.RemoveItemCounter;
    id: number;
};

export type ActionDeleteToCard = {
    type: ActionTypeShoppingCard.DeleteToCard;
    id: number;
};

export type ActionBuyItems = {
    type: ActionTypeShoppingCard.BuyItems;
};

export type ActionDeleteAllItemsCard = {
    type: ActionTypeShoppingCard.DeleteAllItemsCard;
};

export type ActionSetErrorShoppingCard = {
    type: ActionTypeShoppingCard.SetError;
    error: string;
};

export type ActionShoppingCard =
    | ActionAddToCard
    | ActionAddItemCounter
    | ActionRemoveItemCounter
    | ActionDeleteToCard
    | ActionBuyItems
    | ActionDeleteAllItemsCard
    | ActionSetErrorShoppingCard;
