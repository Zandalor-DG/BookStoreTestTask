import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Comment, Avatar } from 'antd';
import moment from 'moment';
import Editor from './Editor';
import CommentList from './CommentList';

export interface IComments {
    author: string;
    avatar: string;
    content: JSX.Element;
    datetime: string;
}

const CommentsTextArea: React.FC = () => {
    const [comments, setComments] = useState<IComments[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        if (!value) {
            return;
        }
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false),
                setValue(''),
                setComments([
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...comments,
                ]);
        }, 1000);
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    return (
        <>
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
                avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                    <Editor onChange={handleChange} onSubmit={handleSubmit} submitting={submitting} value={value} />
                }
            />
        </>
    );
};

export default CommentsTextArea;
