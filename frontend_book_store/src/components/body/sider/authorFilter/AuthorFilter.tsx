import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';

interface PropsAuthorFilter {
    onChange(value: number): void;
    defaultAuthor: number | undefined;
}

const AuthorFilter: React.FC<PropsAuthorFilter> = ({ onChange, defaultAuthor }: PropsAuthorFilter) => {
    const allAuthor = useSelector((state: StateReduxType) => state.bookStoreState.allFilteringOptions?.allAuthor);
    const authorOption = allAuthor?.map((a) => {
        // return (
        //     <Option key={idx} value={a.id}>
        //         {a.name}
        //     </Option>
        // );
        return {
            value: a.id.toString(),
            label: a.name,
        };
    });

    return (
        <Select
            defaultValue={defaultAuthor}
            showSearch
            style={{ width: 199 }}
            placeholder="Select an author"
            optionFilterProp="children"
            onChange={onChange}
            allowClear={true}
            //onSearch={onSearch}
            //optionLabelProp={'test'}
            options={authorOption}
            // labelInValue={true}
            // value={defaultAuthor}
        />
    );
};

export default AuthorFilter;
