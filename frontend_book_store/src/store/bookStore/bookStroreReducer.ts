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
