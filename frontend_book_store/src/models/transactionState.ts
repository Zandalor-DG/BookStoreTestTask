import { Transaction } from './TransactionStore/transaction';

export interface TransactionState {
    transactions: Transaction[] | null;
    error?: string;
}
