import {
    getAllBooks,
    getAllFilteringOptions,
    getBook,
    IPostAddComment,
    IPostAddOrUpdateRate,
    postAddComment,
    postAddOrUpdateRate,
} from '../../api/apiBookStore';
import { PaginationParams } from '../../models/BookStore/paginationParams';
import { AppDispatch } from '../reducers';
import {
    addComment,
    addOrUpdateRate,
    setAllFilteringOptions,
    setBookState,
    SetBookStoreState as setBookStoreState,
    setErrorBookStore,
    setTotalPage,
} from './actionCreatedBookStore';

export const allBooks = ({ page, pageSize, filterState }: PaginationParams) => async (
    dispatch: AppDispatch,
): Promise<void> => {
    try {
        const data = await getAllBooks({ page, pageSize, filterState });
        dispatch(setBookStoreState(data.rows));
        dispatch(setTotalPage(data.count));
    } catch (err) {
        dispatch(setErrorBookStore(err.message));
    }
};

export const bookInfo = (id: string) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const data = await getBook(id);
        dispatch(setBookState(data));
    } catch (err) {
        dispatch(setErrorBookStore(err.message));
    }
};

export const addNewComment = ({ comment, bookId, reply, replyId }: IPostAddComment) => async (
    dispatch: AppDispatch,
): Promise<void> => {
    try {
        const commentData = await postAddComment({ comment, bookId, reply, replyId });
        dispatch(addComment(commentData));
    } catch (err) {
        dispatch(setErrorBookStore(err.message));
    }
};

export const addOrUpdateBookRate = ({ rateBook, bookId }: IPostAddOrUpdateRate) => async (
    dispatch: AppDispatch,
): Promise<void> => {
    try {
        const rate = await postAddOrUpdateRate({ rateBook, bookId });
        dispatch(addOrUpdateRate(rate));
    } catch (err) {
        dispatch(setErrorBookStore(err.message));
    }
};

export const allFilteringOptions = () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const data = await getAllFilteringOptions();
        dispatch(setAllFilteringOptions(data));
    } catch (err) {
        dispatch(setErrorBookStore(err.message));
    }
};
