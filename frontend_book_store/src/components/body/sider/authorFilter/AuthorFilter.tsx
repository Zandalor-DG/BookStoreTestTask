import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';

interface PropsAuthorFilter {
    onChange(value: number): void;
}

const AuthorFilter: React.FC<PropsAuthorFilter> = ({ onChange }: PropsAuthorFilter) => {
    const { Option } = Select;
    const allAuthor = useSelector((state: StateReduxType) => state.bookStoreState.allFilteringOptions?.allAuthor);
    const authorOption = allAuthor?.map((a, idx) => {
        return (
            <Option key={idx} value={a.name}>
                {a.name}
            </Option>
        );
    });

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
