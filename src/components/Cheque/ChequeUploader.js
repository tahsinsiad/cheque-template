import { InboxOutlined } from '@ant-design/icons';
import { notification, Upload } from 'antd';
import React from 'react';

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    notification.error({ message: 'You can only upload JPG/PNG file!' });
  }
  const isLt2M = file.size / 1024 / 1024 < 9;
  if (!isLt2M) {
    notification.error({ message: 'Image must smaller than 8MB!' });
  }
  return isJpgOrPng && isLt2M;
}

const ChequeUploader = ({ handleUploadCheque, handleChangeUploadCheque }) => {
  const { Dragger } = Upload;
  const props = {
    name: 'file',
    showUploadList: false,
    multiple: false,
    accept: '.jpg, .jpeg, .png',
    beforeUpload: beforeUpload,
    action: handleUploadCheque,
    onChange: handleChangeUploadCheque,
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support only AB bank and City bank cards
      </p>
    </Dragger>
  );
};

export default ChequeUploader;
