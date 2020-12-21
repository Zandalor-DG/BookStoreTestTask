export interface BookStoreData {
    id: number;
    name: string;
    Author: { name: string };
    Publish: { name: string };
    Genre: [{ name: string }];
    price: number;
    File: { path_name: string };
}
