import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import css from './ShoppingCart.module.css';

interface IDeleteAllItemComponent {
    onDeleteAllItem: () => void;
}

export const DeleteAllItem: React.FC<IDeleteAllItemComponent> = ({ onDeleteAllItem }: IDeleteAllItemComponent) => {
    return (
        <>
            <Button
                className={css.button}
                type="primary"
                shape="round"
                onClick={onDeleteAllItem}
                icon={<DeleteOutlined />}
                size={'large'}
            >
                Delete all
            </Button>
        </>
    );
};

export default DeleteAllItem;
