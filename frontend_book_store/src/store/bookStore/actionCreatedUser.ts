import { AllFilteringOptions } from '../../models/BookStore/allFilteringOptions';
import { BookStoreData } from '../../models/BookStore/bookStoreData';
import {
    ActionSetAllFilteringOptions,
    ActionSetBookState,
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

export const setAllFilteringOptions = (allFilteringOptions: AllFilteringOptions): ActionSetAllFilteringOptions => ({
    type: ActionTypeBookStore.SetAllFilteringOptions,
    allFilteringOptions,
});

export const setPageSize = (pageSize: number): ActionSetPageSize => ({
    type: ActionTypeBookStore.SetPageSize,
    pageSize,
});

export const setBookState = (book: BookStoreData): ActionSetBookState => ({
    type: ActionTypeBookStore.SetBookState,
    book,
});

export const SetBookStoreState = (books: BookStoreData[]): ActionSetBookStoreState => ({
    type: ActionTypeBookStore.SetBookStoreState,
    books,
});

export const setErrorBookStore = (error: string): ActionSetErrorBookStore => ({
    type: ActionTypeBookStore.SetError,
    error,
});
