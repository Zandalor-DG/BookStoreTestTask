import React from 'react';
import AuthorFilter from './authorFilter/AuthorFilter';
import 'antd/dist/antd.css';
import GenreFilter from './genreFilter/GenreFilter';
import PriceFilter from './priceFilter/PriceFilter';
import PublishHouse from './publishHouse/PublishHouse';
import { Actions, FilterState } from './filterReducer/filterReducer';

interface PropsSiderFilter {
    filterDispatch: React.Dispatch<Actions>;
    filterState: FilterState;
}

const SiderFilter: React.FC<PropsSiderFilter> = ({ filterDispatch, filterState }: PropsSiderFilter) => {
    const handleChangeGenre = (value: number[]) => {
        filterDispatch({ type: 'set_genre', selectedGenres: value });
    };

    const onChangePublish = (value: number) => {
        filterDispatch({ type: 'set_publish', selectedPublish: value });
    };

    const onChangeAuthor = (value: number) => {
        filterDispatch({ type: 'set_author', selectedAuthors: value });
    };

    const onAfterChangePrice = (value: [number, number]) => {
        filterDispatch({ type: 'set_price', min: value[0], max: value[1] });
    };

    return (
        <div className="bookStore__sider">
            <GenreFilter handleChange={handleChangeGenre} defaultGenres={filterState.genres} />

            <PublishHouse onChange={onChangePublish} defaultPublish={filterState.publish} />

            <AuthorFilter onChange={onChangeAuthor} defaultAuthor={filterState.author} />

            <PriceFilter
                onAfterChange={onAfterChangePrice}
                defaultMinPrice={filterState.minPrice}
                defaultMaxPrice={filterState.maxPrice}
            />
        </div>
    );
};

export default SiderFilter;
