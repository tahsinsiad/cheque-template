import { Content } from 'antd/lib/layout/layout';
import React from 'react';

const LayoutBody = ({ children }) => {
  return (
    <div
      className="site-layout"
      style={{
        flex: '1',
        borderRadius: '15px',
      }}
    >
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: 'center', color: 'red' }}
        >
          {children}
        </div>
      </Content>
    </div>
  );
};

export default LayoutBody;
