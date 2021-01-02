import { getAllTransactionItem } from '../../api/apiTransaction';
import { AppDispatch } from '../reducers';
import { setErrorTransaction, setTransactions } from './actionCreatedTransaction';

export const allTransactionItem = () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        const data = await getAllTransactionItem();
        dispatch(setTransactions(data));
    } catch (err) {
        dispatch(setErrorTransaction(err.message));
    }
};
