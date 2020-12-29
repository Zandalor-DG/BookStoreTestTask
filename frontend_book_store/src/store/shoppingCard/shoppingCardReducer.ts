import { ActionShoppingCard, ActionTypeShoppingCard } from './actionTypesShoppingCard';
import { ShoppingCardState } from '../../models/shoppingCardState';
import { shoppingCardInitialState } from '../../data/ShoppingCardInitialState';

const ShoppingCardReducer = (state = shoppingCardInitialState, action: ActionShoppingCard): ShoppingCardState => {
    switch (action.type) {
        case ActionTypeShoppingCard.AddToCard: {
            const prevProducts = state.productInCard ? [...state.productInCard] : [];
            return { ...state, productInCard: [...prevProducts, action.product] };
        }
        case ActionTypeShoppingCard.AddItemCounter: {
            const addItemCounter = state.productInCard ? [...state.productInCard] : [];
            return {
                ...state,
                productInCard: [
                    ...addItemCounter.map((a) =>
                        a.id !== action.id ? a : { ...a, count: a.count + 1, resultPrice: a.resultPrice + a.price },
                    ),
                ],
            };
        }
        case ActionTypeShoppingCard.RemoveItemCounter: {
            const removeItemCounter = state.productInCard ? [...state.productInCard] : [];
            return {
                ...state,
                productInCard: [
                    ...removeItemCounter.map((a) =>
                        a.id !== action.id ? a : { ...a, count: a.count - 1, resultPrice: a.resultPrice - a.price },
                    ),
                ],
            };
        }
        case ActionTypeShoppingCard.DeleteToCard: {
            const deleteToCard = state.productInCard ? [...state.productInCard] : [];
            return {
                ...state,
                productInCard: [...deleteToCard.filter((a) => a.id !== action.id)],
            };
        }
        case ActionTypeShoppingCard.DeleteAllItemsCard:
            return {
                totalPrice: 0,
                productInCard: undefined,
            };
        case ActionTypeShoppingCard.SetError:
            return {
                ...state,
                error: action.error,
            };
        default:
            return { ...state };
    }
};

export default ShoppingCardReducer;
