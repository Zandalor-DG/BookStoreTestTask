import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import css from './ProfilePage.module.css';
import { changePassword } from '../../../store/userStore/thunkUser';
import { StateReduxType } from '../../../store/reducers';

export interface onChangePassword {
    oldPassword: string;
    newPassword: string;
}

const ChangePassword: React.FC = () => {
    const user = useSelector((state: StateReduxType) => state.userState.user);

    const dispatch = useDispatch();
    const onFinish = ({ oldPassword, newPassword }: onChangePassword) => {
        dispatch(changePassword({ oldPassword, newPassword }, user));
    };

    return (
        <>
            <div className={css.profilePage__changePassword}>
                <Form name="register" onFinish={onFinish} scrollToFirstError>
                    <Form.Item
                        name="oldPassword"
                        label="Old password"
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
                        name="newPassword"
                        label="New password"
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
                        label="Confirm new password"
                        dependencies={['newPassword']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Change password
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default ChangePassword;
