import React from 'react';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import RateBook from './RateBook';
import css from '../Book.module.css';
import { baseURL } from '../../../../api/axios';
import { PropsGetBook } from '../../../../api/apiBookStore';

interface propsCoverBook {
    data: PropsGetBook | undefined;
}

const BookInfo: React.FC<propsCoverBook> = ({ data }: propsCoverBook) => {
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
                <RateBook rate={data?.rateBook} />
                <h4>rate: {data?.rateBook}</h4>
                <h2>{data?.book.name}</h2>
                <h3>by {data?.book.Author.name}</h3>
            </div>
        </div>
    );
};

export default BookInfo;
