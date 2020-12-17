import React from 'react';
import AuthorFilter from './authorFilter/AuthorFilter';
import GenreFilter from './genreFilter/GenreFilter';
import PriceFilter from './priceFilter/PriceFilter';
import PublishHouse from './publichHouse/PublishHouse';

const SiderFilter: React.FC = () => {
    return (
        <div className="bookStore__sider">
            <GenreFilter />

            <PublishHouse />

            <AuthorFilter />

            <PriceFilter />
        </div>
    );
};

export default SiderFilter;
