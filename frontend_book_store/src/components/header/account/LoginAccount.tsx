import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../store/userStore/thunkUser';
import { setIsOpenModal } from '../../../store/userStore/actionCreatedUser';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export interface InputsLogin {
    email: string;
    password: string;
}

const LoginAccount: React.FC = () => {
    const dispatch: any = useDispatch();
    const textError = <span style={{ color: 'red', marginLeft: '33%' }}>error submit</span>;
    const [errorSubmit, setErrorSubmit] = useState(false);
    const onFinish = ({ email, password }: InputsLogin) => {
        dispatch(loginUser({ email, password })).then((resp: boolean) => {
            if (resp) {
                dispatch(setIsOpenModal(false));
            } else {
                setErrorSubmit(true);
            }
        });
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            {errorSubmit && textError}

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginAccount;
