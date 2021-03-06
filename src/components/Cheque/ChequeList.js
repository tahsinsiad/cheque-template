import { List, Modal } from 'antd';
import React, { useState } from 'react';
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
        renderItem={(item) => (
          <ChequeItem
            item={item}
            onTargetChequeItemForDelete={handleDeleteChequeItem}
          />
        )}
      />
      <Modal
        title="Delete Cheque"
        okText="Yes"
        cancelText="No"
        okType="danger"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Are you sure to delete this cheque?
      </Modal>
    </div>
  );
};

export default ChequeList;
