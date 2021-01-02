import { Transaction } from '../models/TransactionStore/transaction';
import axios from './axios';

export const getAllTransactionItem = async (): Promise<Transaction[]> => {
    const res = await axios.get('transaction/all');
    const data: Transaction[] = res.data;
    return data;
};

export const postSetTransaction = async (): Promise<string> => {
    const res = await axios.post('transaction/settransaction');
    const data: string = res.data;
    return data;
};
