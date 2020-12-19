import { BookStoreData } from './BookStore/bookStoreData';

export interface BookStoreState {
    books: BookStoreData[] | null;
    pageSize: number;
    totalPage: number;
    error?: string;
}
