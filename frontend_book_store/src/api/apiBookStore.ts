import { BookStoreData } from '../models/BookStore/bookStoreData';
import { PaginationParams } from '../models/BookStore/paginationParams';
import axios from './axios';

export const postAllBooks = async ({ pageSize, page }: PaginationParams): Promise<BookStoreData[]> => {
    const res = await axios.post('/account/signin', { pageSize, page });
    const books: BookStoreData[] = res.data;
    return books;
};
