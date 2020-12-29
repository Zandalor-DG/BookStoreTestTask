// import React from 'react';
// import { ProductModelInCard } from '../../../models/ShoppingCardStore/productModelInCard';
// import ShoppingTableBody from './ShoppingTableBody';

// interface IShoppingTable {
//     totalPrice: number;
//     allItem: ProductModelInCard[] | undefined;
// }

// const ShoppingTable: React.FC<IShoppingTable> = ({ totalPrice, allItem }: IShoppingTable) => {
//     const tableBody = allItem?.map((a) => (
//         <ShoppingTableBody
//             key={a.id}
//             name={a.name}
//             author={a.author}
//             price={a.price}
//             count={a.count}
//             resultPrice={a.resultPrice}
//             addItem={addItem}
//             removeItem={removeItem}
//             deletePosition={deletePosition}
//             buyPosition={}
//         />
//     ));

//     return (
//         <div>
//             <div className="header__shoppingCart">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>AllCheckBox</th>
//                             <th>NamePurchace</th>
//                             <th>Price</th>
//                             <th> + </th>
//                             <th> count </th>
//                             <th> - </th>
//                             <th> resultPrice </th>
//                             <th> Delete position Or Buy </th>
//                         </tr>
//                     </thead>
//                     <tbody>{tableBody}</tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ShoppingTable;
