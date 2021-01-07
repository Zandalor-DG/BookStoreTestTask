import qs from 'query-string';
import { AllFilteringOptions } from '../models/BookStore/allFilteringOptions';
import { BookStoreData, CommentState } from '../models/BookStore/bookStoreData';
import { PaginationParams } from '../models/BookStore/paginationParams';
import { NotificationUser } from '../models/NotificationStore/notification';
import axios from './axios';

export interface propsAllBooks {
    rows: BookStoreData[];
    count: number;
}

export interface PropsGetBook {
    book: BookStoreData;
    commentsBook: CommentState[];
    rateBook: number;
    userRate: number | 'notRate';
}

export interface ICommentAndNotification {
    isNotification: boolean;
    comments: CommentState[];
    notification: NotificationUser | null;
}

export interface IPostAddComment {
    comment: string;
    reply?: string;
    bookId: string;
    replyId?: number;
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
    const data: propsAllBooks = res.data.booksResponse;
    return data;
};

export const getBook = async (id: string): Promise<PropsGetBook> => {
    const res = await axios.get('/book/getbook', {
        params: { id },
    });
    const data: PropsGetBook = res.data.data;
    return data;
};

export const postAddComment = async ({
    comment,
    bookId,
    reply,
    replyId,
}: IPostAddComment): Promise<ICommentAndNotification> => {
    const res = await axios.post('/book/comment', { comment, bookId, reply, replyId });
    const data: ICommentAndNotification = res.data.commentAndNotification;
    return data;
};

export const postAddOrUpdateRate = async ({ rateBook, bookId }: IPostAddOrUpdateRate): Promise<number> => {
    const res = await axios.post('/book/ratebook', { rateBook, bookId });
    const data: number = res.data.rate;
    return data;
};

export const getAllFilteringOptions = async (): Promise<AllFilteringOptions> => {
    const res = await axios.get('/book/allfilteringoptions');
    const data: AllFilteringOptions = res.data.allFilteringOptions;
    return data;
};
