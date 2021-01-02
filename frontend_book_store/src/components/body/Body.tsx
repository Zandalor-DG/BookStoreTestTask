import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React, { memo, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { allBooks, allFilteringOptions } from '../../store/bookStoreStore/thunkBookStore';
import { useQuery } from '../hooks/useQuery';
import { getFilterUrl } from '../utils/stringifiedUtils';
import BooksCard from './booksCard/BooksCard';
import { filterReducer, FilterState, getInitialFilterState } from './sider/filterReducer/filterReducer';
import SiderFilter from './sider/SiderFilter';

const Body: React.FunctionComponent = () => {
    const { Sider, Content } = Layout;
    const history = useHistory();
    const value = useQuery();

    const [filterState, filterDispatch] = useReducer(filterReducer, value as FilterState, getInitialFilterState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allFilteringOptions());
    }, []);

    useEffect(() => {
        history.push(getFilterUrl(filterState));
        dispatch(allBooks({ page: 1, pageSize: 8, filterState }));
    }, [filterState]);

    return (
        <div>
            <Layout>
                <Sider>
                    <SiderFilter filterDispatch={filterDispatch} filterState={filterState} />
                </Sider>
                <Content>
                    <BooksCard filterState={filterState} />
                </Content>
            </Layout>
        </div>
    );
};

export default memo(Body);
