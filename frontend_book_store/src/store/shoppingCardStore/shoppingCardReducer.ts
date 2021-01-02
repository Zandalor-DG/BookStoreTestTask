import { shoppingCardInitialState } from '../../data/ShoppingCardInitialState';
import { ShoppingCartState } from '../../models/shoppingCartState';
import { ActionShoppingCard, ActionTypeShoppingCard } from './actionTypesShoppingCard';

const ShoppingCardReducer = (state = shoppingCardInitialState, action: ActionShoppingCard): ShoppingCartState => {
    switch (action.type) {
        case ActionTypeShoppingCard.AddToCard: {
            return { ...state, productInCart: [...action.product] };
        }
        case ActionTypeShoppingCard.AddItemCounter: {
            const addItemCounter = state.productInCart ? [...state.productInCart] : [];
            return {
                ...state,
                productInCart: [...addItemCounter.map((a) => (a.id !== action.id ? a : { ...a, count: a.count + 1 }))],
            };
        }
        case ActionTypeShoppingCard.RemoveItemCounter: {
            const removeItemCounter = state.productInCart ? [...state.productInCart] : [];
            return {
                ...state,
                productInCart: [
                    ...removeItemCounter.map((a) => (a.id !== action.id ? a : { ...a, count: a.count - 1 })),
                ],
            };
        }
        case ActionTypeShoppingCard.DeleteToCard: {
            const deleteToCard = state.productInCart ? [...state.productInCart] : [];
            return {
                ...state,
                productInCart: [...deleteToCard.filter((a) => a.id !== action.id)],
            };
        }
        case ActionTypeShoppingCard.DeleteAllItemsCard:
            return {
                totalPrice: 0,
                productInCart: undefined,
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
