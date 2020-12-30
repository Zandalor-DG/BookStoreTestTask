import React from 'react';
import 'antd/dist/antd.css';
import { Image, Button } from 'antd';
import RateBook from './RateBook';
import css from '../Book.module.css';
import { baseURL } from '../../../../api/axios';
import { PropsGetBook } from '../../../../api/apiBookStore';
import { useDispatch } from 'react-redux';
import { addItemCart } from '../../../../store/shoppingCard/thunkShoppingCard';
import { postAddItemCart } from '../../../../api/apiShoppingCard';

interface propsCoverBook {
    data: PropsGetBook | undefined;
    id: number;
}

const BookInfo: React.FC<propsCoverBook> = ({ data, id }: propsCoverBook) => {
    const onCart = () => {
        postAddItemCart(id);
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
                    {data?.book.price} $
                </Button>
            </div>
        </div>
    );
};

export default BookInfo;
