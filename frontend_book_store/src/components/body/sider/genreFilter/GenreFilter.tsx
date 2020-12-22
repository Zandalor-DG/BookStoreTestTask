import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';

const GenreFilter: React.FC = () => {
    const { Option } = Select;

    const allGenre = useSelector((state: StateReduxType) => state.bookStoreState.allFilteringOptions.allGenre);
    const genreOptions = allGenre.map((a, idx) => {
        return (
            <Option key={idx} value={a.name} label={a.name}>
                <div className="demo-option-label-item">
                    {/* <span role="img" aria-label={a.name}>
                        Igor
                    </span> */}
                    {a.name}
                </div>
            </Option>
        );
    });

    function handleChange(value: string[]) {
        console.log(`selected ${value}`);
    }

    return (
        <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="select genre"
            onChange={handleChange}
            optionLabelProp="label"
        >
            {genreOptions}
        </Select>
    );
};

export default GenreFilter;
