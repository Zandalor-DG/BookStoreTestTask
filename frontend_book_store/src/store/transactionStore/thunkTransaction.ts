import { getAllTransactionItem, postSendTransaction } from '../../api/apiTransaction';
import { AppDispatch } from '../reducers';
import { setErrorTransaction, setTransactionItem, setTransactions } from './actionCreatedTransaction';

export const allTransactionItems = () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const data = await getAllTransactionItem();
        dispatch(setTransactions(data));
    } catch (err) {
        dispatch(setErrorTransaction(err.message));
    }
};

export const sendTransactionItem = (transactionName: Date) => async (dispatch: AppDispatch): Promise<boolean> => {
    try {
        const data = await postSendTransaction(transactionName);
        dispatch(setTransactionItem(data));
        return true;
    } catch (err) {
        dispatch(setErrorTransaction(err.message));
        return false;
    }
};
