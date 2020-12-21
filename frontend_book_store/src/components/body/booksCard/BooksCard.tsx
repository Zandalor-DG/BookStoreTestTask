import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import css from './BooksCard.module.css';
import PaginationBookStore from './PaginationBookStore';
import { useDispatch, useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import { allBooks } from '../../../store/bookStore/thunkBookStore';
import Preloader from '../../common/preloader/Preloader';

const BooksCard: React.FunctionComponent = () => {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const books = useSelector((state: StateReduxType) => state.bookStoreState.books);

    useEffect(() => {
        if (books) {
            return;
        }
        dispatch(allBooks({ page: 1, pageSize: 6 }));
        return () => {
            dispatch(allBooks({ page: 1, pageSize: 6 }));
        };
    });

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
                            src={a.pathCover}
                            style={{ width: '250px', height: '500px', objectFit: 'cover' }}
                        />
                    }
                >
                    <Meta
                        title={`${a.name} by ${a.author}`}
                        description={`genre: ${a.genre} 
                        publish house: ${a.publishHouse}`}
                    />
                </Card>
            );
        })
    );

    return (
        <div className="body__booksCard">
            <div className={css.booksCard__wrapper}>{booksCart}</div>
            <PaginationBookStore />
        </div>
    );
};

export default React.memo(BooksCard);
