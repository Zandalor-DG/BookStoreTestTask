import React from 'react';
import AuthorFilter from './authorFilter/AuthorFilter';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import GenreFilter from './genreFilter/GenreFilter';
import PriceFilter from './priceFilter/PriceFilter';
import PublishHouse from './publichHouse/PublishHouse';
import { Actions, FilterState } from './filterReducer';

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

    const onResetFilter = () => {
        filterDispatch({ type: 'set_reset', reset: undefined });
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

            <Button style={{ marginLeft: '25%', marginRight: '25%', marginTop: '20px' }} onClick={onResetFilter} danger>
                Reset filter
            </Button>
        </div>
    );
};

export default SiderFilter;
