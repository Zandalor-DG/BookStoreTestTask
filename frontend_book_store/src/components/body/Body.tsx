import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import BooksCard from './booksCard/BooksCard';
import SiderFilter from './sider/SiderFilter';

const Body: React.FunctionComponent = () => {
    const { Sider, Content } = Layout;
    return (
        <div>
            <Layout>
                <Sider>
                    <SiderFilter />
                </Sider>
                <Content>
                    <BooksCard />
                </Content>
            </Layout>
        </div>
    );
};

export default Body;
