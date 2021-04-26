import { List, Modal } from 'antd';
import React, { useState } from 'react';
import HistoryItem from './HistoryItem';
const data = [
  {
    title: 'History 1',
  },
  {
    title: 'History 2',
  },
  {
    title: 'History 3',
  },
  {
    title: 'History 4',
  },
];

const HistoryList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleDeleteChequeItem = () => {
    setIsModalVisible(true);
  };
  return (
    <div>
      <List
        style={{ color: '#fff' }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <HistoryItem
            item={item}
            index={index}
            onTargetChequeItemForDelete={handleDeleteChequeItem}
          />
        )}
      />
      <Modal
        title="Delete History"
        okText="Yes"
        cancelText="No"
        okType="danger"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Are you sure to delete this history?
      </Modal>
    </div>
  );
};

export default HistoryList;
