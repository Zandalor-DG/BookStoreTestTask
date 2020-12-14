import React from 'react';
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
    const dispatch = useDispatch();
    const onFinish = ({ email, password }: InputsLogin) => {
        dispatch(loginUser({ email, password }));
        dispatch(setIsOpenModal(false));
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

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginAccount;

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../../store/userStore/thunkUser';

// const LoginAccount: React.FunctionComponent = () => {

//     return (
//         <>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <label htmlFor="email">enter Email</label>
//                 <input type="text" placeholder="Enter email pls" name="email" ref={register({ required: true })} />
//                 {errors.email && <span>This field is required</span>}
//                 <label htmlFor="password">enter password</label>
//                 <input type="password" placeholder="Password pls" name="password" ref={register({ required: true })} />
//                 {errors.password && <span>This field is required</span>}
//                 <input type="submit" />
//             </form>
//         </>
//     );
// };

// export default LoginAccount;
