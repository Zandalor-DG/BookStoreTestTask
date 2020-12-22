export interface AllAuthor {
    name: string;
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AllPublish {
    name: string;
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AllGenre {
    name: string;
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AllFilteringOptions {
    allAuthor: AllAuthor[];
    allPublish: AllPublish[];
    allGenre: AllGenre[];
    minPrice: number;
    maxPrice: number;
}
