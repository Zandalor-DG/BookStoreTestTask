import { postAllBooks } from '../../api/apiBookStore';
import { PaginationParams } from '../../models/BookStore/paginationParams';
import { AppDispatch } from '../reducers';
import { SetBookStoreState, setErrorBookStore, setTotalPage } from './actionCreatedUser';

export const allBooks = ({ page, pageSize }: PaginationParams) => async (dispatch: AppDispatch) => {
    try {
        const data = await postAllBooks({ page, pageSize });
        dispatch(SetBookStoreState(data.booksResponse.rows));
        dispatch(setTotalPage(data.booksResponse.count));
    } catch (err) {
        dispatch(setErrorBookStore(err.message));
    }
};