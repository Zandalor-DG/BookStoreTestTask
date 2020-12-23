import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../store/userStore/thunkUser';
import { setIsOpenModal } from '../../../store/userStore/actionCreatedUser';
import { StateReduxType } from '../../../store/reducers';

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
    let textError;
    const onFinish = ({ email, password }: InputsLogin) => {
        dispatch(loginUser({ email, password })).then((resp: boolean) => {
            console.log(resp);
            if (resp) {
                dispatch(setIsOpenModal(false));
            } else {
                textError = <span style={{ color: 'red' }}>Not authorized</span>;
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
                        required: true,
                        message: 'Please input your username!',
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
            {true && textError}
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginAccount;
