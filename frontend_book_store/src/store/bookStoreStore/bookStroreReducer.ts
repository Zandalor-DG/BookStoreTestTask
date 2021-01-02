import { ActionBookStore, ActionTypeBookStore } from './actionTypesBookStore';
import bookStoreInitialState from '../../data/BookStoreInitialState';
import { BookStoreState } from '../../models/bookStoreState';

const bookStoreReducer = (state = bookStoreInitialState, action: ActionBookStore): BookStoreState => {
    switch (action.type) {
        case ActionTypeBookStore.SetBookStoreState: {
            return { ...state, books: [...action.books] };
        }
        case ActionTypeBookStore.SetBookState: {
            return {
                ...state,
                book: {
                    ...action.data,
                    book: { ...action.data.book },
                    commentsBook: [...action.data.commentsBook],
                },
            };
        }
        case ActionTypeBookStore.AddComment: {
            if (!state.book) {
                return state;
            }
            return {
                ...state,
                book: {
                    book: { ...state.book?.book },
                    commentsBook: action.comment,
                    rateBook: state.book?.rateBook,
                    userRate: state.book.userRate,
                },
            };
        }
        case ActionTypeBookStore.AddOrUpdateRate: {
            if (!state.book) {
                return state;
            }
            return {
                ...state,
                book: {
                    book: { ...state.book?.book },
                    commentsBook: [...state.book?.commentsBook],
                    rateBook: action.rate,
                    userRate: state.book.userRate,
                },
            };
        }
        case ActionTypeBookStore.SetAllFilteringOptions: {
            return { ...state, allFilteringOptions: { ...action.allFilteringOptions } };
        }
        case ActionTypeBookStore.SetTotalPage: {
            return { ...state, totalPage: action.totalPage };
        }
        case ActionTypeBookStore.SetPageSize: {
            return { ...state, pageSize: action.pageSize };
        }
        case ActionTypeBookStore.SetError:
            return {
                ...state,
                error: action.error,
            };
        default:
            return { ...state };
    }
};

export default bookStoreReducer;
