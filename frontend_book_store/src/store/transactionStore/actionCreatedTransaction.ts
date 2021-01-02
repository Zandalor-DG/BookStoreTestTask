import { Transaction } from '../../models/TransactionStore/transaction';
import {
    ActionSetErrorTransaction,
    ActionSetTransaction,
    ActionSetTransactionItem,
    ActionTypeTransaction,
} from './actionTypeTransaction';

export const setTransactions = (transactions: Transaction[]): ActionSetTransaction => ({
    type: ActionTypeTransaction.SetTransaction,
    transactions,
});

export const setTransactionItem = (transaction: Transaction): ActionSetTransactionItem => ({
    type: ActionTypeTransaction.setTransactionItem,
    transaction,
});

export const setErrorTransaction = (error: string): ActionSetErrorTransaction => ({
    type: ActionTypeTransaction.SetErrorTransaction,
    error,
});
