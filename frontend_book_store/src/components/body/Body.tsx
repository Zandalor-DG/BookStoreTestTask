import React, { memo, useEffect, useReducer } from 'react';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router';
import { Layout } from 'antd';
import BooksCard from './booksCard/BooksCard';
import SiderFilter from './sider/SiderFilter';
import { useDispatch } from 'react-redux';
import { allBooks, allFilteringOptions } from '../../store/bookStore/thunkBookStore';
import { filterReducer, getInitialFilterState } from './sider/filterReducer';
import { FilterState } from './sider/filterReducer';
import { useQuery } from '../hooks/useQuery';
import { getFilterUrl } from '../utils/stringifiedUtils';

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
        dispatch(allBooks({ page: 1, pageSize: 6, filterState }));
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
