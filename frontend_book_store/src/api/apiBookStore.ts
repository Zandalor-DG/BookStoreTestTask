import { AllFilteringOptions } from '../models/BookStore/allFilteringOptions';
import { BookStoreData } from '../models/BookStore/bookStoreData';
import { PaginationParams } from '../models/BookStore/paginationParams';
import axios from './axios';

export interface propsAllBooks {
    booksResponse: {
        rows: BookStoreData[];
        count: number;
    };
}

export const postAllBooks = async ({ pageSize, page }: PaginationParams): Promise<propsAllBooks> => {
    const res = await axios.post('/book/allbooks', { pageSize, page });
    const data: propsAllBooks = res.data;
    return data;
};

export const getAllFilteringOptions = async (): Promise<AllFilteringOptions> => {
    const res = await axios.get('/book/allfilteringoptions');
    const data: AllFilteringOptions = res.data;
    return data;
};
