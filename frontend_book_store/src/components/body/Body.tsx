import React from 'react';
import 'antd/dist/antd.css';
import { useLocation } from 'react-router';
import { Layout } from 'antd';
import BooksCard from './booksCard/BooksCard';
import SiderBody from './sider/SiderBody';

const Body: React.FunctionComponent = () => {
    const { Sider, Content } = Layout;
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <Layout>
                <Sider>
                    <SiderBody />
                </Sider>
                <Content>
                    <BooksCard />
                </Content>
            </Layout>
        </div>
    );
};

export default Body;
