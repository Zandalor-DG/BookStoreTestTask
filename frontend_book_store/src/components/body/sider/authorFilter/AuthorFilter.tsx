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
    //const { Option } = Select;
    const allAuthor = useSelector((state: StateReduxType) => state.bookStoreState.allFilteringOptions?.allAuthor);
    //const author = allAuthor.find((a) => a.id === defaultAuthor);
    const authorOption = allAuthor?.map((a) => {
        // return (
        //     <Option key={idx} value={a.id}>
        //         {a.name}
        //     </Option>
        // );
        return {
            value: a.id.toString(),
            label: <span>{a.name}</span>,
        };
    });

    // function onSearch(val: string) {
    //     console.log('search:', val);
    // }

    return (
        <Select
            defaultValue={defaultAuthor}
            showSearch
            style={{ width: 199 }}
            placeholder="Select an author"
            optionFilterProp="children"
            onChange={onChange}
            //onSearch={onSearch}
            options={authorOption}
            // labelInValue={true}
            // value={defaultAuthor}
        />
    );
};

export default AuthorFilter;
