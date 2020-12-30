export interface ProductModelInCard {
    id: number;
    count: number;
    Book: {
        name: string;
        price: number;
        Author: {
            name: string;
        };
        File: {
            path_name: string;
        };
    };
}
