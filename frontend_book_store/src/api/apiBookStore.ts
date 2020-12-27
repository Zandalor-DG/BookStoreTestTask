import { AllFilteringOptions } from '../models/BookStore/allFilteringOptions';
import { BookStoreData, CommentState } from '../models/BookStore/bookStoreData';
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
    commentsBook: CommentState[];
    rateBook: number;
}

export interface IPostAddComment {
    comment: string;
    reply?: string;
    bookId: string;
}

export interface IPostAddOrUpdateRate {
    rateBook: number;
    bookId: string;
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

export const postAddComment = async ({ comment, bookId, reply }: IPostAddComment): Promise<CommentState[]> => {
    const res = await axios.post('/book/comment', { comment, bookId, reply });
    const data: CommentState[] = res.data.comment;
    return data;
};

export const postAddOrUpdateRate = async ({ rateBook, bookId }: IPostAddOrUpdateRate): Promise<number> => {
    const res = await axios.post('/book/ratebook', { rateBook, bookId });
    const data: number = res.data.rate;
    return data;
};

export const getAllFilteringOptions = async (): Promise<AllFilteringOptions> => {
    const res = await axios.get('/book/allfilteringoptions');
    const data: AllFilteringOptions = res.data;
    return data;
};
