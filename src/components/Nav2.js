import { Form, Input, Select, Button, DatePicker, Divider } from 'antd';
import React from 'react';
import PrintReadyCheque from './PrintCheque/PrintReadyCheque';

const Nav2 = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Form layout="vertical" form={form}>
        <Form.Item>
          <Form.Item
            label="Bank Name"
            name="bankName"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 7px)',
              marginBottom: '0px',
            }}
          >
            <Select placeholder="Select One">
              <Select.Option value="demo">AB Bank</Select.Option>
              <Select.Option value="demo">City Bank</Select.Option>
            </Select>
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
            label="Date"
            name="name"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 7px)',
              marginBottom: '0px',
            }}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Account Holder Name">
          <Input placeholder="ex: John doe" />
        </Form.Item>
        <Form.Item>
          <Form.Item
            label="Currency"
            name="currency"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 7px)',
              marginBottom: '0px',
            }}
          >
            <Select placeholder="Select one">
              <Select.Option value="dollar">USD</Select.Option>
              <Select.Option value="euro">EURO</Select.Option>
            </Select>
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
            label="Amount"
            name="amount"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 7px)',
              marginBottom: '0px',
            }}
          >
            <Input placeholder="ex: 3000" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="A/C Status"
          name="acStatus"
          style={{
            display: 'inline-block',
            width: 'calc(50% - 7px)',
          }}
        >
          <Select placeholder="Select one">
            <Select.Option value="dollar">Regular</Select.Option>
            <Select.Option value="euro">Savings</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
      <Divider>Preview</Divider>
      <PrintReadyCheque />
    </>
  );
};

export default Nav2;
