import React, { useState } from 'react';
import { Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch } from 'antd';
import { useForm } from 'react-hook-form';
import { updateUserData } from '../../../store/userStore/thunkUser';
import { useDispatch, useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import { UserData } from '../../../models/User/userData';

const ProfilePage = () => {
    const [form] = Form.useForm();
    const { fullName, email, password } = useSelector((state: StateReduxType) => state.userState.user);
    const dispatch = useDispatch();
    const onSubmit = ({ fullName, email, password, dob, roleId }: UserData) => {
        dispatch(updateUserData({ fullName, email, password, dob, roleId }));
    };
    return (
        <>
            <Form onFinish={(value) => onSubmit(value)} form={form}>
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
                >
                    <Input defaultValue={fullName} />
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
                >
                    <Input defaultValue={email} />
                </Form.Item>

                <Form.Item label="Select" name="roleId">
                    <Select defaultValue="User">
                        <Select.Option value="1">Admin</Select.Option>
                        <Select.Option value="2">Moderator</Select.Option>
                        <Select.Option value="3">User</Select.Option>
                    </Select>
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
                    <Input.Password defaultValue={password} />
                </Form.Item>

                <Form.Item
                    label="Date of birthday"
                    name="dob"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your date of birthday!',
                            whitespace: true,
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Button">
                    <Button htmlType="submit">Button</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default ProfilePage;
