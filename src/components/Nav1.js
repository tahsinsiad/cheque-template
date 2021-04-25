import { Button, Form, Input } from 'antd';
import React from 'react';
import ChequeUploader from './Cheque/ChequeUploader';
import PointOverImageSteps from './Cheque/PointOverImageSteps';

const Nav1 = () => {
  const [form] = Form.useForm();
  return (
    <>
      <h1 style={{ color: '#fff', fontWeight: '900' }}>Configure Cheque</h1>
      <Form
        style={{ textAlign: 'left' }}
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="bankName"
          label="Bank Name"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item>
          <Form.Item
            label="Width"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 7px)',
              marginBottom: '0px',
            }}
          >
            <Input />
          </Form.Item>
          <span
            style={{
              display: 'inline-block',
              width: '14px',
              lineHeight: '32px',
              textAlign: 'center',
            }}
          ></span>
          <Form.Item
            label="Height"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 7px)',
              marginBottom: '0px',
            }}
          >
            <Input />
          </Form.Item>
        </Form.Item> */}
        <Form.Item
          name="chequeImg"
          label="Cheque Image"
          className="collection-create-form_last-form-item"
        >
          <ChequeUploader />
        </Form.Item>
        <Form.Item
          name="chequeImg"
          label="Cheque Image"
          className="collection-create-form_last-form-item"
        >
          <PointOverImageSteps />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Nav1;
