import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { useLocation } from 'react-router';
import { Layout } from 'antd';
import BooksCard from './booksCard/BooksCard';
import SiderFilter from './sider/SiderFilter';
import { useDispatch, useSelector } from 'react-redux';
import { allBooks, allFilteringOptions } from '../../store/bookStore/thunkBookStore';
import { StateReduxType } from '../../store/reducers';

const Body: React.FunctionComponent = () => {
    const { Sider, Content } = Layout;
    const location = useLocation();
    console.log(location);

    const dispatch = useDispatch();
    const books = useSelector((state: StateReduxType) => state.bookStoreState.books);

    useEffect(() => {
        dispatch(allBooks({ page: 1, pageSize: 6 }));
        dispatch(allFilteringOpjdfgkhdfgvc  ksdftions());
        return ()asdasdasd => {
            dispatch(allBooks({ page: 1, pageSize: 6 }));
        };
    });

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
