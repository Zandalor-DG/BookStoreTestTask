import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Body from './components/body/Body';
import Book from './components/body/book/Book';
import Preloader from './components/common/preloader/Preloader';
import PrivateRoute from './components/common/privateRoute/PrivateRoute';
import HeaderContent from './components/header/HeaderContent';
import ProfilePage from './components/header/profilePage/ProfilePage';
import ShoppingCart from './components/header/shoppingCart/ShoppingCart';
import TransactionPage from './components/header/transactionPage/TransactionPage';
import { StateReduxType } from './store/reducers';
import { loginUserByToken } from './store/userStore/thunkUser';

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
                    <PrivateRoute path="/cart" exact>
                        <ShoppingCart />
                    </PrivateRoute>
                    <PrivateRoute path="/transaction">
                        <TransactionPage />
                    </PrivateRoute>
                    {/* <Route path="/book/:id" render={() => <ShoppingCart />} /> */}
                </Switch>
            </section>

            <Footer>Footer</Footer>
        </Layout>
    );
};

export default React.memo(App);
