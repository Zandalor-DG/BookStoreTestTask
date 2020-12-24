import { BookStoreState } from '../models/bookStoreState';

const bookStoreInitialState: BookStoreState = {
    books: null,
    allFilteringOptions: {
        allAuthor: [{ id: 0, name: '' }],
        allGenre: [{ id: 0, name: '' }],
        allPublish: [{ id: 0, name: '' }],
        minPrice: 0,
        maxPrice: 400,
    },
    pageSize: 8,
    totalPage: 10,
};

export default bookStoreInitialState;
