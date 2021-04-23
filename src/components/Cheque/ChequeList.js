import { List } from 'antd';
import React from 'react';
import ChequeItem from './ChequeItem';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const ChequeList = () => {
  return (
    <div>
      <List
        style={{ color: '#fff' }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => <ChequeItem item={item} />}
      />
    </div>
  );
};

export default ChequeList;
