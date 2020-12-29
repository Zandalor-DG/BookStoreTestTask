import { ProductModelInCard as ProductModelInCard } from './ShoppingCardStore/productModelInCard';

export interface ShoppingCardState {
    productInCard?: ProductModelInCard[];
    totalPrice: number;
    error?: string;
}
