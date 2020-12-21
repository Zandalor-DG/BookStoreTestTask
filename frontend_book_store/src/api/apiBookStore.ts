import { BookStoreData } from '../models/BookStore/bookStoreData';
import { PaginationParams } from '../models/BookStore/paginationParams';
import axios from './axios';

export interface propsAllBoks {
    booksVM: BookStoreData[];
    count: number;
}

export const postAllBooks = async ({ pageSize, page }: PaginationParams): Promise<propsAllBoks> => {
    const res = await axios.post('/book/allbooks', { pageSize, page });
    const data: propsAllBoks = res.data;
    return data;
};
