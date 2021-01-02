export interface ProductModelInCard {
    id: number;
    count: number;
    bookId: number;
    Book: {
        name: string;
        price: number;
        totalPrice: number;
        Author: {
            name: string;
        };
        File: {
            path_name: string;
        };
    };
}
