/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Avatar, List, Tag, Tooltip } from 'antd';
import { DeleteOutlined, PrinterOutlined } from '@ant-design/icons';

const HistoryItem = ({
  item,
  index,
  onHistoryItemClick,
  onTargetHistoryItemForDelete,
}) => {
  return (
    <List.Item
      onClick={() => onHistoryItemClick && onHistoryItemClick(item)}
      actions={[
        <Tooltip title="Print">
          <a
            key="list-loadmore-edit"
            onClick={() => onTargetHistoryItemForDelete(item)}
          >
            <PrinterOutlined style={{ color: '#faad14', fontSize: '16px' }} />
          </a>
        </Tooltip>,
        <a
          key="list-loadmore-edit"
          onClick={() => onTargetHistoryItemForDelete(item)}
        >
          <DeleteOutlined style={{ color: 'red', fontSize: '16px' }} />
        </a>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar shape="circle" size="large" />}
        title={
          <>
            <a style={{ marginRight: '10px' }} href="https://ant.design">
              {item.title}
            </a>
            {index === 0 && (
              <Tag style={{ borderRadius: '30px' }} color="#87d068">
                New
              </Tag>
            )}
          </>
        }
      />
    </List.Item>
  );
};

export default HistoryItem;
