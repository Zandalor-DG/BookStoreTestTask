import { postAllBooks, getAllFilteringOptions } from '../../api/apiBookStore';
import { PaginationParams } from '../../models/BookStore/paginationParams';
import { AppDispatch } from '../reducers';
import {
    setAllFilteringOptions,
    SetBookStoreState as setBookStoreState,
    setErrorBookStore,
    setTotalPage,
} from './actionCreatedUser';

export const allBooks = ({ page, pageSize }: PaginationParams) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const data = await postAllBooks({ page, pageSize });
        dispatch(setBookStoreState(data.booksResponse.rows));
        dispatch(setTotalPage(data.booksResponse.count));
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
