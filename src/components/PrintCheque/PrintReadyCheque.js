import { PrinterOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import React, { useState } from 'react';
import { useLocation } from 'react-router';

const PrintReadyCheque = ({ imgSrc }) => {
  const location = useLocation();
  const isHistory = location?.pathname === '/history';
  const [imgOrientation, setImgOrientation] = useState('landscape');

  const handleChangeOrientation = (val) => {
    setImgOrientation(val);
  };
  return (
    <div style={{ marginTop: '16px' }}>
      {!isHistory && (
        <h3 style={{ color: '#fff', fontWeight: '900' }}>
          Congratualtions! You can now print the cheque{' '}
        </h3>
      )}

      <div
        style={{ display: 'flex', marginBottom: '16px', alignItems: 'center' }}
      >
        <span style={{ color: '#fff', marginRight: '16px' }}>
          Orientation:{' '}
        </span>
        <Select
          onChange={handleChangeOrientation}
          style={{ minWidth: '340px' }}
          value={imgOrientation}
        >
          <Select.Option value="landscape">Landscape</Select.Option>
          <Select.Option value="potrait">Potrait</Select.Option>
        </Select>
        <Button
          type="primary"
          style={{ marginLeft: '16px' }}
          shape="round"
          icon={<PrinterOutlined />}
        >
          Print{' '}
        </Button>
      </div>
      <div>
        <img
          className={
            imgOrientation === 'potrait' ? 'rotate-image-orientation' : ''
          }
          alt="test"
          width="100%"
          src="https://checks-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto/v1/product/check/blue-classic-check-1"
        />
      </div>
    </div>
  );
};

export default PrintReadyCheque;
