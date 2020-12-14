import { Input } from 'antd';
import React from 'react';

const { Search } = Input;

const SearchHeader: React.FunctionComponent = () => {
    const onSearch = (value: string) => console.log(value);

    return (
        <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: 500, margin: '0 10px' }}
        />
    );
};

export default SearchHeader;
