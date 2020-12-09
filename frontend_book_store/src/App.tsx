import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import { Route } from 'react-router-dom';
import LoginAccount from './components/header/account/LoginAccount';
import RegisterAccount from './components/header/account/RegisterAccount';

const App: React.FunctionComponent = () => {
    return (
        <div className="App__bookStore">
            <Header />
            <Route path="/signin" render={() => <LoginAccount />} />
            <Route path="/signup" render={() => <RegisterAccount />} />
            <Body />
        </div>
    );
};

export default App;
