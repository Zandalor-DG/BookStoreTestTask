import { Button } from 'antd';
import React, { useState } from 'react';
import LoginAccount from './LoginAccount';
import RegisterAccount from './RegisterAccount';

const AccountPage: React.FC = () => {
    const [isToggle, toggleLoginOrRegister] = useState(true);

    const onToggleAccountOrRegister = () => {
        toggleLoginOrRegister(!isToggle);
    };

    const textLinkAccountOrRegister = isToggle ? 'Sign Up' : 'Sign In';
    const textTitle = isToggle ? 'Sign In' : 'Sign Up';
    const bodyAccountPage = isToggle ? <LoginAccount /> : <RegisterAccount />;

    return (
        <>
            <h2>{textTitle}</h2>

            <Button onClick={onToggleAccountOrRegister} type="link">
                {textLinkAccountOrRegister}
            </Button>
            {bodyAccountPage}
        </>
    );
};

export default AccountPage;
