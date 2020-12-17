import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const PublishHouse: React.FC = () => {
    const { Option } = Select;

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
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
        </Select>
    );
};

export default PublishHouse;
