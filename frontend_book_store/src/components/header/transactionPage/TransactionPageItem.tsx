import React from 'react';
import { TransactionItem } from '../../../models/TransactionStore/transactionItem';

interface ITransactionItem {
    transactionItem: TransactionItem[];
}

const TransactionPageItem: React.FC<ITransactionItem> = ({ transactionItem }: ITransactionItem) => {
    const itemRender = transactionItem.map((a) => {
        return (
            <React.Fragment key={a.id}>
                <h3>{a.Book.name}</h3>
                <h4>by {a.Book.Author.name}</h4>
                <p>price: {a.original_price}</p>
                <p>how much: {a.count}</p>
            </React.Fragment>
        );
    });

    return <>{itemRender}</>;
};

export default TransactionPageItem;
