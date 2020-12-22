import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { PropsUpdateUserData, updateUserData } from '../../../store/userStore/thunkUser';
import { useDispatch, useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import moment from 'moment';
import css from './ProfilePage.module.css';

const ProfileUser: React.FC = () => {
    const user = useSelector((state: StateReduxType) => state.userState.user);
    const id = user?.id as number;
    const dispatch = useDispatch();
    const onSubmit = ({ fullName, email, dob }: PropsUpdateUserData) => {
        dispatch(updateUserData({ fullName, email, dob, id }));
    };
    if (!user) return null;
    const { dob, email, fullName } = user;

    return (
        <Form onFinish={(value) => onSubmit(value)} className={css.login__form}>
            <Form.Item
                label="Full name"
                name="fullName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your nickname!',
                        whitespace: true,
                    },
                ]}
                initialValue={fullName}
            >
                <Input />
            </Form.Item>

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
                initialValue={email}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Select" name="roleId" initialValue="User">
                <Select>
                    <Select.Option value="1">Admin</Select.Option>
                    <Select.Option value="2">Moderator</Select.Option>
                    <Select.Option value="3">User</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Date of birthday" name="dob" initialValue={moment(dob)}>
                <DatePicker />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save changes
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ProfileUser;
