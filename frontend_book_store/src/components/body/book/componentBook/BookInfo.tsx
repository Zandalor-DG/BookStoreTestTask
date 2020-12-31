import { Button, Image } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PropsGetBook } from '../../../../api/apiBookStore';
import { baseURL } from '../../../../api/axios';
import { addItemCart } from '../../../../store/shoppingCard/thunkShoppingCard';
import css from '../Book.module.css';
import RateBook from './RateBook';

interface propsCoverBook {
    data: PropsGetBook | undefined;
    id: number;
}

const BookInfo: React.FC<propsCoverBook> = ({ data, id }: propsCoverBook) => {
    const dispatch = useDispatch();
    const onCart = () => {
        dispatch(addItemCart(id));
    };

    return (
        <div className={css.book__coverAndRate}>
            <div>
                <Image
                    width={200}
                    height={300}
                    src={baseURL + data?.book.File.path_name ?? 'http://localhost:3000/download.png'}
                />
            </div>
            <div className={css.coverAndRate__rate}>
                <RateBook userRate={data?.userRate} rate={data?.rateBook} />
                <h4>rate: {data?.rateBook}</h4>
                <h2>{data?.book.name}</h2>
                <h3>by {data?.book.Author.name}</h3>
                <Button onClick={onCart} type="primary">
                    <NavLink to="/cart">{data?.book.price} $</NavLink>
                </Button>
            </div>
        </div>
    );
};

export default BookInfo;
