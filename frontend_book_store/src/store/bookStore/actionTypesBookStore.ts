import { BookStoreData } from '../../models/BookStore/bookStoreData';

export enum ActionTypeBookStore {
    SetTotalPage = 'SetTotalPage',
    SetError = 'SetError',
    SetPageSize = 'SetPageSize',
    SetBookStoreState = 'SetBookStoreState',
}

export type ActionSetTotalPage = {
    type: ActionTypeBookStore.SetTotalPage;
    totalPage: number;
};

export type ActionSetPageSize = {
    type: ActionTypeBookStore.SetPageSize;
    pageSize: number;
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
    | ActionSetErrorBookStore;
