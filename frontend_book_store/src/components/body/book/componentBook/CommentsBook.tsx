import React, { useRef, useState } from 'react';
import 'antd/dist/antd.css';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { baseURL } from '../../../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { CommentState } from '../../../../models/BookStore/bookStoreData';
import CommentList from './CommentList';
import Editor from './Editor';
import { addNewComment } from '../../../../store/bookStore/thunkBookStore';
import { useParams } from 'react-router-dom';
import { StateReduxType } from '../../../../store/reducers';
import { TextAreaRef } from 'antd/lib/input/TextArea';

interface PropsCommentsBook {
    comments: CommentState[];
}

export interface IComments {
    actions: JSX.Element[];
    author: string;
    avatar: string;
    content: JSX.Element;
    datetime: JSX.Element;
}

const CommentsBook: React.FC<PropsCommentsBook> = ({ comments }: PropsCommentsBook) => {
    const dispatch = useDispatch();
    const params: {
        id: string;
    } = useParams();
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const user = useSelector((state: StateReduxType) => state.userState.user);
    const avatarUser = user
        ? `${baseURL}/${user.avatar}`
        : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
    const textAreaEditorRef = useRef<TextAreaRef>(null);
    const [nameReply, setNameReply] = useState<string>('');

    const onReply = (name: string) => {
        if (!textAreaEditorRef.current) {
            return;
        }
        setNameReply(name);
        textAreaEditorRef.current.focus();
    };

    const handleSubmit = () => {
        if (!value) {
            return;
        }
        setSubmitting(true);
        dispatch(addNewComment({ comment: value, reply: nameReply, bookId: params.id }));
        setSubmitting(false);
        setValue('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    const userComments: IComments[] = comments?.map((a, ix) => {
        const avatar = a.CommentUser.File?.path_name
            ? `${baseURL}/${a.CommentUser.File.path_name}`
            : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
        const reply = !a.reply ?? (
            <span>
                <br /> {a.reply}
            </span>
        );
        return {
            actions: [
                <span onClick={() => onReply(a.CommentUser.email)} key={ix}>
                    Reply to
                </span>,
            ],
            author: a.CommentUser.email,
            avatar,
            content: (
                <p>
                    {a.comment}
                    {reply}
                </p>
            ),
            datetime: (
                <Tooltip title={moment(a.createdAt).format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment(a.createdAt).fromNow()}</span>
                </Tooltip>
            ),
        };
    });

    return (
        <>
            {userComments.length > 0 && <CommentList comments={userComments} />}
            <Comment
                avatar={<Avatar src={avatarUser} alt="Han Solo" />}
                content={
                    <Editor
                        nameReply={nameReply}
                        ref={textAreaEditorRef}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                    />
                }
            />
        </>
    );
};

export default CommentsBook;
