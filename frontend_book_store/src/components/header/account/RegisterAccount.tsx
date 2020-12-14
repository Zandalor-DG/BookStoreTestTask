import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Tooltip, Button, DatePicker } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { userRole } from '../../../models/User/userRoleEnum';
import { registerUser } from '../../../store/userStore/thunkUser';
import { useDispatch, useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import { setIsOpenModal } from '../../../store/userStore/actionCreatedUser';

export interface InputsRegister {
    fullName: string;
    email: string;
    password: string;
    dob: Date;
    roleId?: userRole;
    confirmPasswordUser?: string;
}

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegisterAccount: React.FC = () => {
    const [form] = Form.useForm();

    const dispatch = useDispatch();
    const onFinish = ({ fullName, email, password, dob }: InputsRegister) => {
        dispatch(registerUser({ fullName, email, password, dob, roleId: userRole.user }));
        dispatch(setIsOpenModal(false));
    };

    return (
        <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} scrollToFirstError>
            <Form.Item
                name="fullName"
                label={
                    <span>
                        Full name&nbsp;
                        <Tooltip title="What do you want others to call you?">
                            <QuestionCircleOutlined />
                        </Tooltip>
                    </span>
                }
                rules={[
                    {
                        required: true,
                        message: 'Please input your nickname!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
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
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Date of birthday"
                name="dob"
                rules={[
                    {
                        required: true,
                        message: 'Please input your date of birthday!',
                    },
                ]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterAccount;

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { userRole } from '../../../models/User/userRoleEnum';
// import { registerUser } from '../../../store/userStore/thunkUser';

// const RegisterAccount: React.FunctionComponent = ({}) => {

//     return (
//         <>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <label htmlFor="fullName">Enter your email</label>
//                 <input type="text" placeholder="Enter your name" name="fullName" ref={register({ required: true })} />
//                 {errors.fullName && <span>Please enter your login</span>}

//                 <label htmlFor="emailUser">Enter your email</label>
//                 <input type="text" placeholder="Enter email" name="email" ref={register({ required: true })} />
//                 {errors.email && <span>Please enter your email</span>}

//                 <label htmlFor="dateOfBirthdayUser">Enter your date of birthday</label>
//                 <input type="text" placeholder="Enter date of birthday" name="dob" ref={register({ required: true })} />
//                 {errors.dob && <span>Please enter your date of birthday</span>}

//                 <label htmlFor="passwordUser">Enter password</label>
//                 <input
//                     type="password"
//                     placeholder="Enter password"
//                     name="password"
//                     ref={register({ required: true })}
//                 />
//                 {errors.password && <span>Please enter your password</span>}

//                 <label htmlFor="confirmPasswordUser">Repeat password</label>
//                 <input
//                     type="password"
//                     placeholder="Repeat password"
//                     name="confirmPasswordUser"
//                     ref={register({ required: true })}
//                 />
//                 {errors.confirmPasswordUser && <span>Please repeat password</span>}

//                 <input type="submit" />
//             </form>
//         </>
//     );
// };

// export default RegisterAccount;
