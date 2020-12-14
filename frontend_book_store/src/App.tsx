import React, { useEffect, useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HeaderContent from './components/header/HeaderContent';
import Body from './components/body/Body';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import ProfilePage from './components/header/profilePage/ProfilePage';
import ShoppingCart from './components/header/shoppingCart/ShoppengCart';
import Preloader from './components/common/preloader/Preloader';
import { useDispatch } from 'react-redux';
import { loginUserByToken } from './store/userStore/thunkUser';
import PrivateRoute from './components/common/privateRoute/PrivateRoute';

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
    const dispatch = useDispatch();
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        dispatch(loginUserByToken());
        setisLoading(false);
    }, []);

    if (isLoading) {
        return <Preloader />;
    }
    return (
        <Layout>
            <Header>
                <HeaderContent />
            </Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>
                    Content
                    <Switch>
                        <Route path="/" render={() => <h1>Hello</h1>} exact />
                        <PrivateRoute path="/profile" exact>
                            <ProfilePage />
                        </PrivateRoute>
                        <PrivateRoute path="/cart" exact>
                            <ShoppingCart />
                        </PrivateRoute>
                    </Switch>
                    <Body />
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default App;
