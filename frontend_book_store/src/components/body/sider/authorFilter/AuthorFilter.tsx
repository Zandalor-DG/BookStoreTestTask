import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';
import { BookStoreData } from '../../../../models/BookStore/bookStoreData';

const AuthorFilter: React.FC = () => {
    const { Option } = Select;
    const author = useSelector((state: StateReduxType) => state.bookStoreState.books);
    const authorOption = author?.map((a: BookStoreData) => {
        return (
            <Option key={a.id} value={a.Author.name}>
                {a.Author.name}
            </Option>
        );
    });

    function onChange(value: string) {
        console.log(`selected ${value}`);
    }

    function onSearch(val: string) {
        console.log('search:', val);
    }

    return (
        <Select
            showSearch
            style={{ width: 199 }}
            placeholder="Select an author"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
        >
            {authorOption}
        </Select>
    );
};

export default AuthorFilter;
