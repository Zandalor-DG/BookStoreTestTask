export interface Transaction {
    transaction_name: string;
    SubTransaction: {
        id: number;
        count: number;
        original_price: number;
        Book: {
            name: string;
            Author: {
                name: string;
            };
        };
    };
}
