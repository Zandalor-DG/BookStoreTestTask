import React from 'react';
import { Input, Form, Button } from 'antd';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';
import { TextAreaRef } from 'antd/lib/input/TextArea';
import { IReplyUser } from './CommentsBook';

type EditorPropTypes = {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit?: () => void;
    submitting?: boolean;
    value: string;
    nameReply?: IReplyUser;
};

const Editor = React.forwardRef<TextAreaRef, EditorPropTypes>(function editorRef(props: EditorPropTypes, ref) {
    const user = useSelector((state: StateReduxType) => state.userState.user);
    const notAuthorize = !user && <span style={{ color: 'tomato' }}> Log in to comment </span>;
    const nameReply = !props.nameReply?.name ? 'Add coment' : `Reply to: ${props.nameReply.name}`;

    return (
        <>
            {notAuthorize}
            <Form.Item>
                <Input.TextArea ref={ref} rows={4} onChange={props.onChange} value={props.value} disabled={!user} />
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    loading={props.submitting}
                    onClick={props.onSubmit}
                    disabled={!props.value}
                    type="primary"
                >
                    {nameReply}
                </Button>
            </Form.Item>
        </>
    );
});

export default Editor;
