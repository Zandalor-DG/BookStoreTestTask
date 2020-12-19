import { BookStoreState } from '../models/bookStoreState';

const bookStoreInitialState: BookStoreState = {
    books: [
        {
            author: '',
            genre: '',
            pathCover: '',
            price: 0,
            publishHouse: '',
        },
    ],
    pageSize: 6,
    totalPage: 10,
};

export default bookStoreInitialState;
