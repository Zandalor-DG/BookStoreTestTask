import React from 'react';
import { Input, Form, Button } from 'antd';

type EditorPropTypes = {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit?: () => void;
    submitting?: boolean;
    value: string;
};

const Editor: React.FC<EditorPropTypes> = ({ onChange, onSubmit, submitting, value }: EditorPropTypes) => (
    <>
        <Form.Item>
            <Input.TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);

export default Editor;
