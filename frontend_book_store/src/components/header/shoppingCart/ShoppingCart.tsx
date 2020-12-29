import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Radio, Divider } from 'antd';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: function fuckUESLINT(text: string) {
            return <a>{text}</a>;
        },
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    },
]; // rowSelection object indicates the need for row selection

const ShoppingCard = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <div>
            <Divider />

            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default ShoppingCard;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllItemsCard } from '../../../api/apiShoppingCard';
// import { StateReduxType } from '../../../store/reducers';
// import ShoppingTable from './ShoppingTable';

// const ShoppingCart: React.FunctionComponent = () => {
//     const dispatch = useDispatch();
//     const allItem = useSelector((state: StateReduxType) => state.shoppingCardState);

//     useEffect(() => {
//         dispatch(getAllItemsCard());
//     }, []);

//     return (
//         <div className="header__shoppingCart">
//             <ShoppingTable totalPrice={allItem.totalPrice} allItem={allItem.productInCard} />
//         </div>
//     );
// };

// export default ShoppingCart;
