import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

let LoginForm: React.FunctionComponent<InjectedFormProps> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="loginUser">Введите Email</label>
            <br />
            <Field component="input" type="text" placeholder="Enter email pls" name="loginUser" />
            <label htmlFor="passwordUser">Введите пароль</label>
            <br />
            <Field component="input" type="password" placeholder="Password pls" name="passwordUser" />
            <button>Authorization</button>
        </form>
    );
};

export default LoginForm = reduxForm({
    form: 'loginForm',
})(LoginForm);
