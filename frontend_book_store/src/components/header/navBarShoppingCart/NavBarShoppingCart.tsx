import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import TransactionPage from '../transactionPage/TransactionPage';

const NavBarShoppingCart: React.FC = () => {
    const { TabPane } = Tabs;

    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="Shopping Cart" key="1">
                <ShoppingCart />
            </TabPane>
            <TabPane tab="Transaction page" disabled={false} key="2">
                <TransactionPage />
            </TabPane>
        </Tabs>
    );
};

export default NavBarShoppingCart;
