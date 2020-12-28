// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import './index.css';
// import { Table, Button } from 'antd';

// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//     },
// ];

// const data = [];
// for (let i = 0; i < 46; i++) {
//     data.push({
//         key: i,
//         name: `Edward King ${i}`,
//         age: 32,
//         address: `London, Park Lane no. ${i}`,
//     });
// }

// const ShoppingCart: React.FC = () => {
//     const [loading, setLoading] = useState(false);

//     // state = {
//     //     selectedRowKeys: [], // Check here to configure the default column
//     //     loading: false,
//     // };

//     // const { loading, selectedRowKeys } = this.state;
//     // const rowSelection = {
//     //     selectedRowKeys,
//     //     onChange: this.onSelectChange,
//     // };
//     //const hasSelected = selectedRowKeys.length > 0;

//     const start = () => {
//         setLoading(true);
//         // ajax request after empty completing
//         // setTimeout(() => {
//         //     this.setState({
//         //         selectedRowKeys: [],
//         //         loading: false,
//         //     });
//         // }, 1000);
//     };

//     // const onSelectChange = (selectedRowKeys) => {
//     //     console.log('selectedRowKeys changed: ', selectedRowKeys);
//     //     this.setState({ selectedRowKeys });
//     // };

//     return (
//         <div>
//             <div style={{ marginBottom: 16 }}>
//                 <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
//                     Reload
//                 </Button>
//                 <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
//             </div>
//             <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//         </div>
//     );
// };

// export default ShoppingCart;
