import React from 'react';
import { IComments } from './CommentsTextArea';

const CommentList = (comments: IComments[]) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
);
