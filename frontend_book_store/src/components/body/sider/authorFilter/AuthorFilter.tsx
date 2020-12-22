import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';
import { useHistory } from 'react-router-dom';

const AuthorFilter: React.FC = () => {
    const { Option } = Select;
    const allAuthor = useSelector((state: StateReduxType) => state.bookStoreState.allFilteringOptions?.allAuthor);
    const authorOption = allAuthor?.map((a, idx) => {
        return (
            <Option key={idx} value={a.name}>
                {a.name}
            </Option>
        );
    });
    const history = useHistory();
    function onChange(value: string) {
        history.push('?asd');
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
