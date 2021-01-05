import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import { allTransactionItems } from '../../../store/transactionStore/thunkTransaction';
import css from './TransactionPage.module.css';
import TransactionPageItem from './TransactionPageItem';

const TransactionPage: React.FC = () => {
    const { Panel } = Collapse;
    const dispatch = useDispatch();
    const transaction = useSelector((state: StateReduxType) => state.transactionState.transactions);

    useEffect(() => {
        dispatch(allTransactionItems());
    }, []);

    const panel = transaction?.map((a) => {
        const totalPrice = a.TransactionItem.reduce((acc, curr) => {
            return acc + curr.original_price * curr.count;
        }, 0);
        return (
            <Panel header={a.transaction_name} key={a.id}>
                <div className={css.transactionPage__column}>
                    <TransactionPageItem transactionItem={a.TransactionItem} />
                </div>
                <div className={css.transactionPage__column}>
                    <span className={css.transactionPage__totalPrice}>total price: {totalPrice}</span>
                </div>
            </Panel>
        );
    });

    return <Collapse accordion>{panel}</Collapse>;
};

export default TransactionPage;

/*
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse accordion>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById('container'),
); 
*/
