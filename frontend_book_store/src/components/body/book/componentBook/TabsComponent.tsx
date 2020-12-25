import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

const TabsComponent: React.FC = () => {
    const { TabPane } = Tabs;

    function callback(key: string | number | null | undefined) {
        console.log(key);
    }

    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
            </TabPane>
        </Tabs>
    );
};

export default TabsComponent;
