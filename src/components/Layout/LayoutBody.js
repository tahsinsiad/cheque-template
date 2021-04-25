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
      <Content
        className="keep-scrolling"
        style={{
          margin: '24px 16px 0',
          overflow: 'hidden scroll',
          height: '92.5vh',
        }}
      >
        <div className="site-layout-background" style={{ padding: 15 }}>
          {children}
        </div>
      </Content>
    </div>
  );
};

export default LayoutBody;
