import { CreditCardOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import css from './ShoppingCart.module.css';

interface IBuyAllItemComponent {
    disableButton: boolean;
    totalPrice: number;
    onBuyAllItem: () => void;
}

const BuyAllItemComponent: React.FC<IBuyAllItemComponent> = ({
    onBuyAllItem,
    totalPrice,
    disableButton,
}: IBuyAllItemComponent) => {
    return (
        <>
            <Button
                disabled={disableButton}
                className={css.allItems__button}
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
