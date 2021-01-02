import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

const TransactionPage: React.FC = () => {
    const { Panel } = Collapse;

    const text = `A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.`;

    return (
        <Collapse accordion>
            <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
            </Panel>
        </Collapse>
    );
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
