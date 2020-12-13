import React, { useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HeaderContent from './components/header/HeaderContent';
import Body from './components/body/Body';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import ProfilePage from './components/header/profilePage/ProfilePage';
import ShoppingCart from './components/header/shoppingCart/ShoppengCart';
import { useDispatch } from 'react-redux';
import { loginUserByToken } from './store/userStore/thunkUser';

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
    useEffect(() => {
        const dispatch = useDispatch();
        dispatch(loginUserByToken());
    }, []);
    return (
        <Layout>
            <Header>
                <HeaderContent />
            </Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>
                    Content
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/cart" component={ShoppingCart} />
                    {/* <PrivateRoute>
                        <LoginAccount />
                    </PrivateRoute> */}
                    <Body />
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default App;
