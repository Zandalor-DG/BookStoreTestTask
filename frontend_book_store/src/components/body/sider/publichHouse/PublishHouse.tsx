import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';

interface PropsPublishHouse {
    onChange(value: number): void;
    defaultPublish: number | undefined;
}

const PublishHouse: React.FC<PropsPublishHouse> = ({ onChange, defaultPublish }: PropsPublishHouse) => {
    //const { Option } = Select;
    const allPublish = useSelector((state: StateReduxType) => state.bookStoreState.allFilteringOptions?.allPublish);
    const publishHouseOption = allPublish?.map((a) => {
        return {
            // <Option key={idx} value={a.id}>
            //     {a.name}
            // </Option>
            value: a.id.toString(),
            label: <span>{a.name}</span>,
        };
    });

    // function onSearch(val: string) {
    //     console.log('search:', val);
    // }

    return (
        <Select
            defaultValue={defaultPublish}
            showSearch
            style={{ width: 199 }}
            placeholder="Select a publish house"
            optionFilterProp="children"
            allowClear={true}
            options={publishHouseOption}
            onChange={onChange}
            //onSearch={onSearch}
        />
    );
};

export default PublishHouse;
