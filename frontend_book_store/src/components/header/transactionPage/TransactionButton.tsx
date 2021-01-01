import { OrderedListOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
//import antd from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const TransactionButton: React.FC = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                {/* <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    1st menu item
                </a> */}
                <NavLink to="/transaction">1st menu item</NavLink>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Space wrap>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Button icon={<OrderedListOutlined />} shape="round"></Button>
                </Dropdown>
            </Space>
        </>
    );
};

export default TransactionButton;
