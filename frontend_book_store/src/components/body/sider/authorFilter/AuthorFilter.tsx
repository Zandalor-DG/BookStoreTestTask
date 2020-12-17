import React from 'react';
import 'antd/dist/antd.css';
import css from './Authors.module.css';
import { Menu, Dropdown, Button, Space } from 'antd';

const AuthorFilter: React.FC = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Space direction="vertical">
                <Space wrap className={css.authorFilter__dropdown}>
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Button className={css.authorFilter__button}>Authors</Button>
                    </Dropdown>
                </Space>
            </Space>
        </>
    );
};

export default AuthorFilter;
