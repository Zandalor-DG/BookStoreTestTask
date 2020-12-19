import { postAllBooks } from '../../api/apiBookStore';
import { PaginationParams } from '../../models/BookStore/paginationParams';
import { AppDispatch } from '../reducers';
import { SetBookStoreState, setErrorBookStore } from './actionCreatedUser';

export const allBooks = ({ pageSize, page }: PaginationParams) => async (dispatch: AppDispatch) => {
    try {
        const books = await postAllBooks({ pageSize, page });
        dispatch(SetBookStoreState(books));
    } catch (err) {
        dispatch(setErrorBookStore(err.message));
    }
};
