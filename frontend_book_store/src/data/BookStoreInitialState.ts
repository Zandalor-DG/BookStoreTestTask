import { BookStoreState } from '../models/bookStoreState';

const bookStoreInitialState: BookStoreState = {
    books: null,
    allFilteringOptions: {
        allAuthor: [{ name: '' }],
        allGenre: [{ name: '' }],
        allPublish: [{ name: '' }],
        minPrice: 0,
        maxPrice: 400,
    },
    pageSize: 6,
    totalPage: 10,
};

export default bookStoreInitialState;
