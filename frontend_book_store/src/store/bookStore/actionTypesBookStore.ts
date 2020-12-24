import { AllFilteringOptions } from '../../models/BookStore/allFilteringOptions';
import { BookStoreData } from '../../models/BookStore/bookStoreData';

export enum ActionTypeBookStore {
    SetTotalPage = 'SetTotalPage',
    SetError = 'SetError',
    SetPageSize = 'SetPageSize',
    SetBookStoreState = 'SetBookStoreState',
    SetAllFilteringOptions = 'SetAllFilteringOptions',
    SetBookState = 'SetBookState',
}

export type ActionSetTotalPage = {
    type: ActionTypeBookStore.SetTotalPage;
    totalPage: number;
};

export type ActionSetPageSize = {
    type: ActionTypeBookStore.SetPageSize;
    pageSize: number;
};

export type ActionSetAllFilteringOptions = {
    type: ActionTypeBookStore.SetAllFilteringOptions;
    allFilteringOptions: AllFilteringOptions;
};

export type ActionSetBookState = {
    type: ActionTypeBookStore.SetBookState;
    book: BookStoreData;
};

export type ActionSetBookStoreState = {
    type: ActionTypeBookStore.SetBookStoreState;
    books: BookStoreData[];
};

export type ActionSetErrorBookStore = {
    type: ActionTypeBookStore.SetError;
    error: string;
};

export type ActionBookStore =
    | ActionSetTotalPage
    | ActionSetPageSize
    | ActionSetBookStoreState
    | ActionSetAllFilteringOptions
    | ActionSetErrorBookStore
    | ActionSetBookState;
