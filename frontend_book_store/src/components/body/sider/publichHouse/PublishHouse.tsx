import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';

const PublishHouse: React.FC = () => {
    const { Option } = Select;
    const allPublish = useSelector((state: StateReduxType) => state.bookStoreState.allFilteringOptions?.allPublish);
    const publishHouseOption = allPublish?.map((a, idx) => {
        return (
            <Option key={idx} value={a.name}>
                {a.name}
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
