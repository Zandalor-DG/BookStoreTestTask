import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HeaderContent from './components/header/HeaderContent';
import Body from './components/body/Body';
import { Route } from 'react-router-dom';
import LoginAccount from './components/header/account/LoginAccount';
import RegisterAccount from './components/header/account/RegisterAccount';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const App: React.FunctionComponent = () => {
    return (
        <Layout>
            <Header>
                <HeaderContent />
            </Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>
                    Content
                    <Route path="/signin" render={() => <LoginAccount />} />
                    <Route path="/signup" render={() => <RegisterAccount />} />
                    <Body />
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default App;
