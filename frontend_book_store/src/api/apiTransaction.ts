import axios from './axios';

export const allTransactionItem = async (): Promise<number> => {
    const res = await axios.get('transaction/all');
    const data: number = res.data;
    return data;
};

export const postSetTransaction = async (): Promise<string> => {
    const res = await axios.post('transaction/settransaction');
    const data: string = res.data;
    return data;
};
