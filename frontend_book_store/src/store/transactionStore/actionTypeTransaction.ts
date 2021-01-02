import { Transaction } from '../../models/TransactionStore/transaction';

export enum ActionTypeTransaction {
    SetTransaction = 'SetTransaction',
    setTransactionItem = 'setTransactionItem',
    SetErrorTransaction = 'SetErrorTransaction',
}

export type ActionSetTransaction = {
    type: ActionTypeTransaction.SetTransaction;
    transactions: Transaction[];
};

export type ActionSetTransactionItem = {
    type: ActionTypeTransaction.setTransactionItem;
    transaction: Transaction;
};

export type ActionSetErrorTransaction = {
    type: ActionTypeTransaction.SetErrorTransaction;
    error: string;
};

export type ActionTransaction = ActionSetTransaction | ActionSetTransactionItem | ActionSetErrorTransaction;
