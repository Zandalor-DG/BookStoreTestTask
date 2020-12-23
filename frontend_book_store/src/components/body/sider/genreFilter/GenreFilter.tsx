import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';

interface PropsGenreFilter {
    handleChange: (value: number[]) => void;
    defaultGenres: number[] | undefined;
}

const GenreFilter: React.FC<PropsGenreFilter> = ({ handleChange, defaultGenres }: PropsGenreFilter) => {
    //const { Option } = Select;

    const allGenre = useSelector((state: StateReduxType) => state.bookStoreState.allFilteringOptions.allGenre);
    const genreOptions = allGenre.map((a) => {
        // return (
        //     <Option key={idx} value={a.id} label={a.name}>
        //         <div className="demo-option-label-item">{a.name}</div>
        //     </Option>
        // );
        return {
            value: a.id.toString(),
            label: <span>{a.name}</span>,
        };
    });

    return (
        <Select
            defaultValue={defaultGenres}
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="select genre"
            onChange={handleChange}
            optionLabelProp="label"
            options={genreOptions}
        />
    );
};

export default GenreFilter;
