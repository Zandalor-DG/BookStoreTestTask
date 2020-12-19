import { BookStoreData } from './BookStore/bookStoreData';

export interface BookStoreState {
    books: BookStoreData[];
    pageSize: number;
    totalPage: number;
    error?: string;
}
