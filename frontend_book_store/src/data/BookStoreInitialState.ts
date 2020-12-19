import { BookStoreState } from '../models/bookStoreState';

const bookStoreInitialState: BookStoreState = {
    books: null,
    pageSize: 6,
    totalPage: 10,
};

export default bookStoreInitialState;
