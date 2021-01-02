import { transactionInitialState } from '../../data/TransactionInitialState';
import { TransactionState } from '../../models/transactionState';
import { ActionTransaction, ActionTypeTransaction } from './actionTypeTransaction';

const transactionReducer = (state = transactionInitialState, action: ActionTransaction): TransactionState => {
    switch (action.type) {
        case ActionTypeTransaction.SetTransaction:
            return {
                ...state,
                transactions: [...action.transactions],
            };
        case ActionTypeTransaction.setTransactionItem:
            const transactionItem = state.transactions ? [...state.transactions] : [];
            return {
                ...state,
                transactions: [...transactionItem, action.transaction],
            };
        case ActionTypeTransaction.SetErrorTransaction:
            return {
                ...state,
                error: action.error,
            };
        default:
            return { ...state };
    }
};

export default transactionReducer;
