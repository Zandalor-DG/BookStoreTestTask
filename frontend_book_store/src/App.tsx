import React, { useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HeaderContent from './components/header/HeaderContent';
import Body from './components/body/Body';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import ProfilePage from './components/header/profilePage/ProfilePage';
import ShoppingCart from './components/header/shoppingCart/ShoppingCart';
import Preloader from './components/common/preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserByToken } from './store/userStore/thunkUser';
import PrivateRoute from './components/common/privateRoute/PrivateRoute';
import { StateReduxType } from './store/reducers';
import Book from './components/body/book/Book';

const { Header, Footer } = Layout;

const App: React.FC = () => {
    const isInitialize = useSelector((state: StateReduxType) => state.userState.isInitialize);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isInitialize) {
            return;
        }

        dispatch(loginUserByToken());
    }, []);

    if (!isInitialize) {
        return <Preloader />;
    }
    return (
        <Layout>
            <Header>
                <HeaderContent />
            </Header>
            <section style={{ flexGrow: 1, backgroundColor: '#cae2e6bf' }}>
                <Switch>
                    <Route path="/" render={() => <Body />} exact />
                    <Route path="/book/:id" render={() => <Book />} />
                    <PrivateRoute path="/profile" exact>
                        <ProfilePage />
                    </PrivateRoute>
                    {/* <PrivateRoute path="/cart" exact> */}
                    <Route path="/cart" render={() => <ShoppingCart />} />
                    {/* </PrivateRoute> */}
                </Switch>
            </section>

            <Footer>Footer</Footer>
        </Layout>
    );
};

export default React.memo(App);
