import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import css from '../Book.module.css';

const RateBook: React.FC = () => {
    const onChange = (value: number) => {
        console.log(value);
    };

    return <Rate defaultValue={3} count={5} onChange={onChange} />;
};

export default RateBook;
