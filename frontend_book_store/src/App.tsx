import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { io } from 'socket.io-client';
import { baseURL } from './api/axios';
import './App.css';
import Body from './components/body/Body';
import Book from './components/body/book/Book';
import Preloader from './components/common/preloader/Preloader';
import PrivateRoute from './components/common/privateRoute/PrivateRoute';
import HeaderContent from './components/header/HeaderContent';
import NavBarShoppingCart from './components/header/navBarShoppingCart/NavBarShoppingCart';
import ProfilePage from './components/header/profilePage/ProfilePage';
import { NotificationUser } from './models/NotificationStore/notification';
import { addOneNotification } from './store/notificationStore/actionCreatedNotification';
import { StateReduxType } from './store/reducers';
import { loginUserByToken } from './store/userStore/thunkUser';

export const socket = io(`${baseURL}/`);

const { Header, Footer } = Layout;

const App: React.FC = () => {
    const isInitialize = useSelector((state: StateReduxType) => state.userState.isInitialize);
    const dispatch = useDispatch();
    const user = useSelector((state: StateReduxType) => state.userState.user);
    const userId = user?.id;

    useEffect(() => {
        if (isInitialize) {
            return;
        }

        dispatch(loginUserByToken());
    }, []);

    useEffect(() => {
        if (!userId) return;
        socket.emit('authorizedUser', userId);

        socket.on('notifications', (data: NotificationUser) => {
            console.log(`listen notifications`);
            console.log(`${data.type}`);
            dispatch(addOneNotification(data));
        });
    }, [userId]);

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
                        <NavBarShoppingCart />
                    </PrivateRoute>
                    {/* <Route path="/book/:id" render={() => <ShoppingCart />} /> */}
                </Switch>
            </section>

            <Footer>Footer</Footer>
        </Layout>
    );
};

export default React.memo(App);
