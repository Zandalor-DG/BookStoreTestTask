export interface BookStoreData {
    id: number;
    name: string;
    theYearOfPublishing: Date;
    language: string;
    numberOfPages: number;
    description: string;
    price: number;
    Author: { name: string };
    Publish: { name: string };
    Genre: [{ name: string }];
    File: { path_name: string };
}

export interface CommentState {
    id: number;
    bookId: number;
    userId: number;
    comment: string;
    replyId: number | null;
    reply?: string;
    createdAt: Date;
    updateAt: Date;
    CommentUser: {
        email: string;
        File: {
            path_name: string;
        };
    };
}
