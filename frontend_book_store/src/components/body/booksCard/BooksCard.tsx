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
        dispatch(allBooks({ page: 0, pageSize: 6 }));
        return () => {
            dispatch(allBooks({ page: 0, pageSize: 6 }));
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
                    style={{ width: 250 }}
                    cover={<img alt={a.name} src={a.pathCover} />}
                >
                    <Meta title={`${a.name} by ${a.author}`} description="www.instagram.com" />
                </Card>
            );
        })
    );

    return (
        <div className={css.booksCard__wrapper}>
            {booksCart}
            <PaginationBookStore />
        </div>
    );
};

export default React.memo(BooksCard);
