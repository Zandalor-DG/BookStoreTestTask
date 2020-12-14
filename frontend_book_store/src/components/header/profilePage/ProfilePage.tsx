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
// import { useForm } from 'react-hook-form';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { UserData } from '../../../models/User/userData';
// import { StateReduxType } from '../../../store/reducers';
// import { updateUserData } from '../../../store/userStore/thunkUser';
// import css from './ProfilePage.module.css';

// const ProfilePage: React.FunctionComponent = () => {
//     const { fullName, email, dob, roleId } = useSelector((state: StateReduxType) => state.userState.user);
//     const { register, handleSubmit, errors } = useForm<UserData>();
//     const dispatch = useDispatch();
//     const onSubmit = ({ fullName, email, password, dob, roleId }: UserData) => {
//         dispatch(updateUserData({ fullName, email, password, dob, roleId }));
//     };
//     return (
//         <div className={css.header__profilePage}>
//             <h1 className="profilePage__title">Profile page</h1>
//             <form onSubmit={handleSubmit(onSubmit)} className={css.profilePage__form}>
//                 <label htmlFor="fullName">Name</label>
//                 <input
//                     className={css.profilePage__input}
//                     type="text"
//                     placeholder="Enter name pls"
//                     name="fullName"
//                     defaultValue={fullName}
//                     ref={register({ required: true })}
//                 />
//                 {errors.fullName && <span className={css.profilePage__error}>This field is required</span>}
//                 <label htmlFor="email">Email</label>
//                 <input
//                     className={css.profilePage__input}
//                     type="email"
//                     placeholder="Enter email pls"
//                     name="email"
//                     defaultValue={email}
//                     ref={register({ required: true })}
//                 />
//                 {errors.email && <span className={css.profilePage__error}>This field is required</span>}
//                 <label htmlFor="password">Password</label>
//                 <input
//                     className={css.profilePage__input}
//                     type="text"
//                     placeholder="Enter password pls"
//                     name="password"
//                     defaultValue="********"
//                     ref={register({ required: false })}
//                 />
//                 {errors.password && <span className={css.profilePage__error}>This field is required</span>}
//                 <label htmlFor="dob">Date of birthday</label>
//                 <input
//                     className={css.profilePage__input}
//                     type="date"
//                     placeholder="Enter data of birth day pls"
//                     name="dob"
//                     defaultValue={dob as string | undefined}
//                     ref={register({ required: true })}
//                 />
//                 {errors.dob && <span className={css.profilePage__error}>This field is required</span>}
//                 <label htmlFor="roleId">Role </label>
//                 <input
//                     className={css.profilePage__input}
//                     type="text"
//                     placeholder="Enter role pls"
//                     name="roleId"
//                     defaultValue={roleId}
//                     ref={register({ required: true })}
//                 />
//                 <input className={css.profilePage__submit} type="submit" value="submit" />
//             </form>
//         </div>
//     );
// };

// export default ProfilePage;
// import React, { useState } from 'react';
// import {
//   Form,
//   Input,
//   Tooltip,
//   Cascader,
//   Select,
//   Row,
//   Col,
//   Checkbox,
//   Button,
//   AutoComplete,
// } from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';
// const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;
// const residences = [
//   {
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];
// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

// const RegistrationForm = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };

//   const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//       <Select
//         style={{
//           width: 70,
//         }}
//       >
//         <Option value="86">+86</Option>
//         <Option value="87">+87</Option>
//       </Select>
//     </Form.Item>
//   );
//   const [autoCompleteResult, setAutoCompleteResult] = useState([]);

//   const onWebsiteChange = (value) => {
//     if (!value) {
//       setAutoCompleteResult([]);
//     } else {
//       setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
//     }
//   };

//   const websiteOptions = autoCompleteResult.map((website) => ({
//     label: website,
//     value: website,
//   }));
//   return (
//     <Form
//       {...formItemLayout}
//       form={form}
//       name="register"
//       onFinish={onFinish}
//       initialValues={{
//         residence: ['zhejiang', 'hangzhou', 'xihu'],
//         prefix: '86',
//       }}
//       scrollToFirstError
//     >
//       <Form.Item
//         name="email"
//         label="E-mail"
//         rules={[
//           {
//             type: 'email',
//             message: 'The input is not valid E-mail!',
//           },
//           {
//             required: true,
//             message: 'Please input your E-mail!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//         hasFeedback
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="confirm"
//         label="Confirm Password"
//         dependencies={['password']}
//         hasFeedback
//         rules={[
//           {
//             required: true,
//             message: 'Please confirm your password!',
//           },
//           ({ getFieldValue }) => ({
//             validator(rule, value) {
//               if (!value || getFieldValue('password') === value) {
//                 return Promise.resolve();
//               }

//               return Promise.reject('The two passwords that you entered do not match!');
//             },
//           }),
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="nickname"
//         label={
//           <span>
//             Nickname&nbsp;
//             <Tooltip title="What do you want others to call you?">
//               <QuestionCircleOutlined />
//             </Tooltip>
//           </span>
//         }
//         rules={[
//           {
//             required: true,
//             message: 'Please input your nickname!',
//             whitespace: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="residence"
//         label="Habitual Residence"
//         rules={[
//           {
//             type: 'array',
//             required: true,
//             message: 'Please select your habitual residence!',
//           },
//         ]}
//       >
//         <Cascader options={residences} />
//       </Form.Item>

//       <Form.Item
//         name="phone"
//         label="Phone Number"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your phone number!',
//           },
//         ]}
//       >
//         <Input
//           addonBefore={prefixSelector}
//           style={{
//             width: '100%',
//           }}
//         />
//       </Form.Item>

//       <Form.Item
//         name="website"
//         label="Website"
//         rules={[
//           {
//             required: true,
//             message: 'Please input website!',
//           },
//         ]}
//       >
//         <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
//           <Input />
//         </AutoComplete>
//       </Form.Item>

//       <Form.Item label="Captcha" extra="We must make sure that your are a human.">
//         <Row gutter={8}>
//           <Col span={12}>
//             <Form.Item
//               name="captcha"
//               noStyle
//               rules={[
//                 {
//                   required: true,
//                   message: 'Please input the captcha you got!',
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Button>Get captcha</Button>
//           </Col>
//         </Row>
//       </Form.Item>

//       <Form.Item
//         name="agreement"
//         valuePropName="checked"
//         rules={[
//           {
//             validator: (_, value) =>
//               value ? Promise.resolve() : Promise.reject('Should accept agreement'),
//           },
//         ]}
//         {...tailFormItemLayout}
//       >
//         <Checkbox>
//           I have read the <a href="">agreement</a>
//         </Checkbox>
//       </Form.Item>
//       <Form.Item {...tailFormItemLayout}>
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// ReactDOM.render(<RegistrationForm />, mountNode);
