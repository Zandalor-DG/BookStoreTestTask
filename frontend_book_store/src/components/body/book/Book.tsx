import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../../api/axios';
import { bookInfo } from '../../../store/bookStore/thunkBookStore';
import { StateReduxType } from '../../../store/reducers';
import Preloader from '../../common/preloader/Preloader';
import CommentsBook from './componentBook/CommentsBook';
import CommentsTextArea from './componentBook/CommentsTextArea';
import BookInfo from './componentBook/BookInfo';
import TabsComponent from './componentBook/TabsComponent';
import css from './Book.module.css';

const Book: React.FC = () => {
    const dispatch = useDispatch();

    const params: {
        id: string;
    } = useParams();

    useEffect(() => {
        dispatch(bookInfo(params.id));
    }, []);
    const book = useSelector((state: StateReduxType) => state.bookStoreState.book);

    return (
        <>
            {/* {!book ? (
                <Preloader />
            ) : ( */}
            <div className={css.bookStore__book}>
                <BookInfo book={book} />
                <TabsComponent />
                <CommentsBook />
                <CommentsTextArea />
            </div>
            {/* )} */}
        </>
    );
};

export default Book;
