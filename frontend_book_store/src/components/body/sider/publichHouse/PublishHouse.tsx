import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';
import { BookStoreData } from '../../../../models/BookStore/bookStoreData';

const PublishHouse: React.FC = () => {
    const { Option } = Select;
    const publishHouse = useSelector((state: StateReduxType) => state.bookStoreState.books);
    const publishHouseOption = publishHouse?.map((a: BookStoreData) => {
        return (
            <Option key={a.id} value={a.publishHouse}>
                {a.publishHouse}
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
            placeholder="Select a publish house"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
        >
            {publishHouseOption}
        </Select>
    );
};

export default PublishHouse;
