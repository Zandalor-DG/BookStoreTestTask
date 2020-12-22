import { ActionBookStore, ActionTypeBookStore } from './actionTypesBookStore';
import bookStoreInitialState from '../../data/BookStoreInitialState';
import { BookStoreState } from '../../models/bookStoreState';

const bookStoreReducer = (state = bookStoreInitialState, action: ActionBookStore): BookStoreState => {
    switch (action.type) {
        case ActionTypeBookStore.SetBookStoreState: {
            return { ...state, books: [...action.books] };
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
                ...bookStoreInitialState,
                error: action.error,
            };
        default:
            return { ...state };
    }
};

export default bookStoreReducer;
