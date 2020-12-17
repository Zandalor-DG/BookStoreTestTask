import React from 'react';
import 'antd/dist/antd.css';
import { Slider } from 'antd';
import css from './PriceFilter.module.css';

const PriceFilter: React.FC = () => {
    const onChange = (value: [number, number]) => {
        console.log('onChange: ', value);
    };

    const onAfterChange = (value: [number, number]) => {
        console.log('onAfterChange: ', value);
    };

    return (
        <div>
            <p className={css.priceFilter__title}>Price</p>
            <Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
        </div>
    );
};

export default PriceFilter;
