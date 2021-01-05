export interface TransactionItem {
    id: number;
    count: number;
    original_price: number;
    total_price: number;
    Book: {
        name: string;
        Author: {
            name: string;
        };
    };
}
