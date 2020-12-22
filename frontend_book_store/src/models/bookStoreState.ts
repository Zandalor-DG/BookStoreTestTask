import { AllFilteringOptions } from './BookStore/allFilteringOptions';
import { BookStoreData } from './BookStore/bookStoreData';

export interface BookStoreState {
    books: BookStoreData[] | null;
    pageSize: number;
    totalPage: number;
    allFilteringOptions: AllFilteringOptions;
    error?: string;
}
