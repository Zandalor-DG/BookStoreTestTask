import React, { useRef, useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
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
import CommentWrapper from './CommentWrapper';

interface PropsCommentsBook {
    comments: CommentState[];
}

export interface IComments {
    actions: JSX.Element[];
    author: JSX.Element;
    avatar: string;
    content: JSX.Element;
    datetime: JSX.Element;
}

export interface IReply {
    replyId?: number;
    reply?: string;
}

const CommentsBook: React.FC<PropsCommentsBook> = ({ comments }: PropsCommentsBook) => {
    const user = useSelector((state: StateReduxType) => state.userState.user);
    const dispatch = useDispatch();
    const params: {
        id: string;
    } = useParams();

    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const [replyForm, setReply] = useState<IReply | undefined>({});
    const [replyId, setReplyId] = useState<number | null>(null);

    const avatarUser = !user?.avatar
        ? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        : `${baseURL}/${user.avatar}`;
    const textAreaEditorRef = useRef<TextAreaRef>(null);

    const setIdToReply = (id: number | null) => {
        setReplyId(id);
    };

    const onReply = (name: string, id: number) => {
        if (!textAreaEditorRef.current) {
            return;
        }
        setReply({ reply: name, replyId: id });
        textAreaEditorRef.current.focus();
    };

    const handleSubmit = () => {
        if (!value) {
            return;
        }
        setSubmitting(true);
        dispatch(
            addNewComment({ comment: value, reply: replyForm?.reply, bookId: params.id, replyId: replyForm?.replyId }),
        );
        setSubmitting(false);
        setValue('');
        setReply(undefined);
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    const userComments: IComments[] = comments?.map((a, ix) => {
        const avatar = a.CommentUser.File?.path_name
            ? `${baseURL}/${a.CommentUser.File.path_name}`
            : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
        const author = <span id={`${a.id}`}>{a.CommentUser.email}</span>;
        const contentReply = a.reply && (
            <span>
                <br />
                Reply to:
                <Button onClick={() => setReplyId(a.replyId)} type="link" size={'small'}>
                    {a.reply}
                </Button>
            </span>
        );
        return {
            actions: [
                <span onClick={() => onReply(a.CommentUser.email, a.id)} key={ix}>
                    Reply to
                </span>,
            ],
            author,
            avatar,
            content: (
                <CommentWrapper replyId={replyId} setIdToReply={setIdToReply} id={a.id}>
                    {a.comment}
                    {contentReply}
                </CommentWrapper>
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
                avatar={<Avatar src={avatarUser} alt={user?.email} />}
                content={
                    <Editor
                        replyForm={replyForm}
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
