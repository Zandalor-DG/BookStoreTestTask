export interface BookStoreData {
    id: number;
    name: string;
    theYearOfPublish: Date;
    language: string;
    numberOfPages: number;
    description: string;
    price: number;
    Author: { name: string };
    Publish: { name: string };
    Genre: [{ name: string }];
    File: { path_name: string };
}
