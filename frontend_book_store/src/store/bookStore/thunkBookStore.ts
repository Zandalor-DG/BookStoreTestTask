import { getAllBooks, getAllFilteringOptions, getBook } from '../../api/apiBookStore';
import { PaginationParams } from '../../models/BookStore/paginationParams';
import { AppDispatch } from '../reducers';
import {
    setAllFilteringOptions,
    setBookState,
    SetBookStoreState as setBookStoreState,
    setErrorBookStore,
    setTotalPage,
} from './actionCreatedUser';

export const allBooks = ({ page, pageSize, filterState }: PaginationParams) => async (
    dispatch: AppDispatch,
): Promise<void> => {
    try {
        const data = await getAllBooks({ page, pageSize, filterState });
        dispatch(setBookStoreState(data.booksResponse.rows));
        dispatch(setTotalPage(data.booksResponse.count));
    } catch (err) {
        dispatch(setErrorBookStore(err.message));
    }
};

export const bookInfo = (id: number) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const data = await getBook(id);
        dispatch(setBookState(data));
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
