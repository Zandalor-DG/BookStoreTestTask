import { CreditCardOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import css from './ShoppingCart.module.css';

interface IBuyAllItemComponent {
    onBuyAllItem: () => void;
    totalPrice: number;
}

const BuyAllItemComponent: React.FC<IBuyAllItemComponent> = ({ onBuyAllItem, totalPrice }: IBuyAllItemComponent) => {
    return (
        <>
            <Button
                className={css.button}
                type="primary"
                shape="round"
                onClick={onBuyAllItem}
                icon={<CreditCardOutlined />}
                size={'large'}
            >
                {' '}
                {totalPrice}$
            </Button>
        </>
    );
};

export default BuyAllItemComponent;
