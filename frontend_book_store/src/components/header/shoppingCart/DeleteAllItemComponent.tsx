import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import css from './ShoppingCart.module.css';

interface IDeleteAllItemComponent {
    disableButton: boolean;
    onDeleteAllItem: () => void;
}

const DeleteAllItem: React.FC<IDeleteAllItemComponent> = ({
    onDeleteAllItem,
    disableButton,
}: IDeleteAllItemComponent) => {
    return (
        <>
            <Button
                disabled={disableButton}
                className={css.allItems__button}
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
