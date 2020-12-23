import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import css from './BooksCard.module.css';
import PaginationBookStore from './PaginationBookStore';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import Preloader from '../../common/preloader/Preloader';
import { baseURL } from '../../../api/axios';
import { FilterState } from '../sider/filterReducer';

interface PropsBooksCard {
    filterState: FilterState;
}

const BooksCard: React.FC<PropsBooksCard> = ({ filterState }: PropsBooksCard) => {
    const { Meta } = Card;
    const books = useSelector((state: StateReduxType) => state.bookStoreState.books);
    const booksCart = !books ? (
        <Preloader />
    ) : (
        books.map((a) => {
            return (
                <Card
                    key={a.id}
                    className={css.booksCard__cardBook}
                    hoverable
                    style={{ width: '250px' }}
                    cover={
                        <img
                            alt={a.name}
                            src={baseURL + a.File.path_name}
                            style={{ width: '250px', height: '500px', objectFit: 'cover' }}
                        />
                    }
                >
                    <Meta
                        title={`${a.name} by ${a.Author}`}
                        description={`genre: ${a.Genre[0].name} 
                        publish house: ${a.Publish.name}`}
                    />
                </Card>
            );
        })
    );

    return (
        <div className="body__booksCard">
            <div className={css.booksCard__wrapper}>{booksCart}</div>
            <PaginationBookStore filterState={filterState} />
        </div>
    );
};

export default React.memo(BooksCard);
