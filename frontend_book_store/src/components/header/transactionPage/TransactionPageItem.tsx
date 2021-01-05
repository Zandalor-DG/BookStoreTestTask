import React from 'react';
import { TransactionItem } from '../../../models/TransactionStore/transactionItem';
import css from './TransactionPage.module.css';

interface ITransactionItem {
    transactionItem: TransactionItem[];
}

const TransactionPageItem: React.FC<ITransactionItem> = ({ transactionItem }: ITransactionItem) => {
    const itemRender = transactionItem.map((a) => {
        return (
            <div className={css.transactionPage__row} key={a.id}>
                <h3 className={css.transactionPage__text}>{a.Book.name}</h3>
                <h4 className={css.transactionPage__text}>by {a.Book.Author.name}</h4>
                <p className={css.transactionPage__text}>price: {a.original_price}</p>
                <p className={css.transactionPage__text}>how much: {a.count}</p>
            </div>
        );
    });

    return <>{itemRender}</>;
};

export default TransactionPageItem;
