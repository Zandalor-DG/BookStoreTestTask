import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import css from './BooksCard.module.css';

const PaginationBookStore: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const onChange = (page: number, pageSize: number | undefined) => {
        console.log(page, pageSize);
        setCurrentPage(page);
    };

    return (
        <Pagination
            current={currentPage}
            onChange={onChange}
            pageSize={6}
            total={50}
            className={css.booksCard__pagination}
        />
    );
};

export default PaginationBookStore;
