export interface NotificationUser {
    id: number;
    commentId: number;
    userId: number;
    type: string;
    payload: JSON;
    read: boolean;
    Comment: {
        CommentBook: {
            id: number;
        };
    };
}
