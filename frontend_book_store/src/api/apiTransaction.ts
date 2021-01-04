import { Transaction } from '../models/TransactionStore/transaction';
import axios from './axios';

export const getAllTransactionItem = async (): Promise<Transaction[]> => {
    const res = await axios.get('transaction/all');
    const data: Transaction[] = res.data.allItem;
    return data;
};

export const postSendTransaction = async (transactionName: Date): Promise<Transaction> => {
    const res = await axios.post('transaction/settransaction', { transactionName });
    const data: Transaction = res.data;
    return data;
};
