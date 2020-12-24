import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

const RateBook: React.FC = () => {
    const onChange = (value: number) => {
        console.log(value);
    };

    return <Rate defaultValue={3} count={5} onChange={onChange} style={{}} />;
};

export default RateBook;
