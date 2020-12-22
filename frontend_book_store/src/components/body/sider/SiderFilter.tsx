import React from 'react';
import AuthorFilter from './authorFilter/AuthorFilter';
import GenreFilter from './genreFilter/GenreFilter';
import PriceFilter from './priceFilter/PriceFilter';
import PublishHouse from './publichHouse/PublishHouse';
import { Actions } from './filterReducer';

interface PropsSiderFilter {
    filterDispatch: React.Dispatch<Actions>;
}

const SiderFilter: React.FC<PropsSiderFilter> = ({ filterDispatch }: PropsSiderFilter) => {
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
            <GenreFilter handleChange={handleChangeGenre} />

            <PublishHouse onChange={onChangePublish} />

            <AuthorFilter onChange={onChangeAuthor} />

            <PriceFilter onAfterChange={onAfterChangePrice} />
        </div>
    );
};

export default SiderFilter;
