import React from 'react';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import RateBook from './RateBook';
import css from '../Book.module.css';
import { baseURL } from '../../../../api/axios';
import { BookStoreData } from '../../../../models/BookStore/bookStoreData';

interface propsCoverBook {
    book: BookStoreData | undefined;
}

const BookInfo: React.FC<propsCoverBook> = ({ book }: propsCoverBook) => {
    return (
        <div className={css.book__coverAndRate}>
            <div>
                <Image
                    width={200}
                    height={300}
                    src={baseURL + book?.File.path_name ?? 'http://localhost:3000/download.png'}
                />
            </div>
            <div className={css.coverAndRate__rate}>
                <RateBook />
                <h4>rate: 3,4</h4>
                <h2>{book?.name}</h2>
                <h3>by {book?.Author.name}</h3>
            </div>
        </div>
    );
};

export default BookInfo;
