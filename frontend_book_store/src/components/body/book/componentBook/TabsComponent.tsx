import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { BookStoreData } from '../../../../models/BookStore/bookStoreData';

interface PropsTabsComponent {
    description: string | undefined;
    booksInfo: BookStoreData | undefined;
}

const TabsComponent: React.FC<PropsTabsComponent> = ({ description, booksInfo }: PropsTabsComponent) => {
    const { TabPane } = Tabs;

    function callback(key: string | number | null | undefined) {
        console.log(key);
    }

    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Description" key="1">
                {description}
            </TabPane>
            <TabPane tab="info" key="2">
                language: {booksInfo?.language}
                <br />
                The year of publish: {booksInfo?.theYearOfPublish}
                <br />
                Number of page: {booksInfo?.numberOfPage}
                <br />
                <h3>Price: {booksInfo?.price}</h3>
            </TabPane>
        </Tabs>
    );
};

export default TabsComponent;
