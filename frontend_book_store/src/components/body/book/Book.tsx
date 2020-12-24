import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bookInfo } from '../../../store/bookStore/thunkBookStore';
import { StateReduxType } from '../../../store/reducers';
import Preloader from '../../common/preloader/Preloader';
import CoverBook from './componentBook/CoverBook';
import RateBook from './componentBook/RateBook';

const Book: React.FC = () => {
    const dispatch = useDispatch();
    const params: {
        id: string;
    } = useParams();
    useEffect(() => {
        dispatch(bookInfo(+params.id));
    }, []);

    const book = useSelector((state: StateReduxType) => state.bookStoreState.book);

    return (
        <>
            {/* {!book ? (
                <Preloader />
            ) : ( */}
            <div>
                <CoverBook />
                <RateBook />
            </div>
            {/* )} */}
        </>
    );
};

export default Book;
