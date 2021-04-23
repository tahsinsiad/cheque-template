import React from 'react';
import { Avatar, List } from 'antd';

const ChequeItem = ({ item }) => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar shape="circle" size="large" />}
        title={<a href="https://ant.design">{item.title}</a>}
      />
    </List.Item>
  );
};

export default ChequeItem;
