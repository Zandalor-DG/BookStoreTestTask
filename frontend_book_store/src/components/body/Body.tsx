import React, { useEffect, useReducer } from 'react';
import 'antd/dist/antd.css';
import { useLocation } from 'react-router';
import { Layout } from 'antd';
import BooksCard from './booksCard/BooksCard';
import SiderFilter from './sider/SiderFilter';
import { useDispatch, useSelector } from 'react-redux';
import { allBooks, allFilteringOptions } from '../../store/bookStore/thunkBookStore';
import { StateReduxType } from '../../store/reducers';
import { filterReducer, getInitialFilterState } from './sider/filterReducer';
import { FilterState } from './sider/filterReducer';

const Body: React.FunctionComponent = () => {
    const { Sider, Content } = Layout;
    const location = useLocation();
    console.log(location.search);

    const [filterState, filterDispatch] = useReducer(filterReducer, {} as FilterState, getInitialFilterState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allFilteringOptions());
    }, []);

    useEffect(() => {
        dispatch(allBooks({ page: 1, pageSize: 6 }));
    }, [filterState]);

    return (
        <div>
            <Layout>
                <Sider>
                    <SiderFilter filterDispatch={filterDispatch} />
                </Sider>
                <Content>
                    <BooksCard />
                </Content>
            </Layout>
        </div>
    );
};

export default Body;
