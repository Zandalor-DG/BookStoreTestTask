import { ProductModelInCard as ProductModelInCart } from './ShoppingCardStore/productModelInCard';

export interface ShoppingCartState {
    productInCart?: ProductModelInCart[];
    totalPrice: number;
    error?: string;
}
