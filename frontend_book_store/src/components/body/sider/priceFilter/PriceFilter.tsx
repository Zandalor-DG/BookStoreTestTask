import React from 'react';
import 'antd/dist/antd.css';
import { Slider } from 'antd';
import css from './PriceFilter.module.css';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';

interface PropsPriceFilter {
    onAfterChange: (value: [number, number]) => void;
}

const PriceFilter: React.FC<PropsPriceFilter> = ({ onAfterChange }: PropsPriceFilter) => {
    const minPrice: number = useSelector((state: StateReduxType) => state.bookStoreState.allFilteringOptions.minPrice);
    const maxPrice: number = useSelector((state: StateReduxType) => state.bookStoreState.allFilteringOptions.maxPrice);
    // const onChange = (value: [number, number]) => {
    //     console.log('onChange: ', value);
    // };

    return (
        <div>
            <p className={css.priceFilter__title}>Price</p>
            <Slider
                range
                step={10}
                min={minPrice}
                max={maxPrice}
                defaultValue={[minPrice, maxPrice]}
                onAfterChange={onAfterChange}
            />
        </div>
    );
};

export default PriceFilter;
