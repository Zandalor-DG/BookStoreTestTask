import { TransactionItem } from './transactionItem';

export interface Transaction {
    id: number;
    transaction_name: string;
    TransactionItem: TransactionItem[];
}
