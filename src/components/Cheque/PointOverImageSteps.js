import { Button, InputNumber, message, Spin, Steps } from 'antd';
import React from 'react';

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

const PointOverImageSteps = ({ image }) => {
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <>
      <Steps current={current}>
        {steps.map((item, index) => (
          <Step
            key={item.title}
            title={item.title}
            icon={index === current + 1 ? <Spin spinning /> : null}
          />
        ))}
      </Steps>
      <div
        style={{ display: 'flex', border: '2px solid #fff', marginTop: '16px' }}
      >
        <div
          style={{
            width: '20%',
            display: 'flex',
            flexDirection: 'column',
            padding: '5px',
          }}
        >
          <label style={{ color: '#fff', marginBottom: '12px' }}>
            Adjust image width
          </label>
          <InputNumber
            min={0}
            value={0}
            style={{ width: '100%', marginBottom: '12px' }}
          />
          <label style={{ color: '#fff', marginBottom: '12px' }}>
            Adjust image height
          </label>
          <InputNumber min={0} value={0} style={{ width: '100%' }} />
        </div>
        <div className="steps-content">
          <img height="200px" src={image} />
        </div>
      </div>
      {/* <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}
    </>
  );
};

export default PointOverImageSteps;
