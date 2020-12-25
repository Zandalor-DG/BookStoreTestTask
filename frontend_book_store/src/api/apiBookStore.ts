import { AllFilteringOptions } from '../models/BookStore/allFilteringOptions';
import { BookStoreData } from '../models/BookStore/bookStoreData';
import { PaginationParams } from '../models/BookStore/paginationParams';
import qs from 'query-string';
import axios from './axios';

export interface propsAllBooks {
    booksResponse: {
        rows: BookStoreData[];
        count: number;
    };
}

export interface PropsGetBook {
    book: BookStoreData;
    commentsBook: [
        {
            bookId: number;
            userId: number;
            comment: string;
            createdAt: Date;
            updateAt: Date;
            CommentUser: {
                email: string;
                File: {
                    path_name: string;
                };
            };
        },
    ];
    rateBook: number;
}

export const getAllBooks = async ({ pageSize, page, filterState }: PaginationParams): Promise<propsAllBooks> => {
    const res = await axios.get('/book/allbooks', {
        params: {
            pageSize,
            page,
            author: filterState?.author,
            publish: filterState?.publish,
            genres: filterState?.genres,
            minPrice: filterState?.minPrice,
            maxPrice: filterState?.maxPrice,
        },
        paramsSerializer: (params) => {
            return qs.stringify(params, { skipNull: true, arrayFormat: 'comma' });
        },
    });
    const data: propsAllBooks = res.data;
    return data;
};

export const getBook = async (id: string): Promise<PropsGetBook> => {
    const res = await axios.get('/book/getbook', {
        params: { id },
    });
    const data: PropsGetBook = res.data;
    return data;
};

export const getAllFilteringOptions = async (): Promise<AllFilteringOptions> => {
    const res = await axios.get('/book/allfilteringoptions');
    const data: AllFilteringOptions = res.data;
    return data;
};
