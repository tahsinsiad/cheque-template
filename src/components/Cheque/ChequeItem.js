/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Avatar, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const ChequeItem = ({
  item,
  onChequeItemClick,
  onTargetChequeItemForDelete,
}) => {
  return (
    <List.Item
      onClick={() => onChequeItemClick && onChequeItemClick(item)}
      actions={[
        <a
          key="list-loadmore-edit"
          onClick={() => onTargetChequeItemForDelete(item)}
        >
          <DeleteOutlined style={{ color: 'red', fontSize: '16px' }} />
        </a>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar shape="circle" size="large" />}
        title={<a href="https://ant.design">{item.title}</a>}
      />
    </List.Item>
  );
};

export default ChequeItem;
