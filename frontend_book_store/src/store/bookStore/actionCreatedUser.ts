import { BookStoreData } from '../../models/BookStore/bookStoreData';
import {
    ActionSetBookStoreState,
    ActionSetErrorBookStore,
    ActionSetPageSize,
    ActionSetTotalPage,
    ActionTypeBookStore,
} from './actionTypesBookStore';

export const setTotalPage = (totalPage: number): ActionSetTotalPage => ({
    type: ActionTypeBookStore.SetTotalPage,
    totalPage,
});

export const setPageSize = (pageSize: number): ActionSetPageSize => ({
    type: ActionTypeBookStore.SetPageSize,
    pageSize,
});

export const SetBookStoreState = (books: BookStoreData[]): ActionSetBookStoreState => ({
    type: ActionTypeBookStore.SetBookStoreState,
    books,
});

export const setErrorBookStore = (error: string): ActionSetErrorBookStore => ({
    type: ActionTypeBookStore.SetError,
    error,
});
