import React from 'react';
import 'antd/dist/antd.css';
import { Space, Card } from 'antd';
import css from './Body.module.css';

const Body: React.FunctionComponent = () => {
    return (
        <div className={css.bookStore__body}>
            <Space className={css.bookStore__wrapper}>
                <Card className={css.body__cardBook} title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card className={css.body__cardBook} title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card className={css.body__cardBook} title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card className={css.body__cardBook} title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card className={css.body__cardBook} title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card className={css.body__cardBook} title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card className={css.body__cardBook} title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card className={css.body__cardBook} title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card className={css.body__cardBook} title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Space>
        </div>
    );
};

export default Body;
