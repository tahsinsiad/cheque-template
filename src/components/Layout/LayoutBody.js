import { Content } from 'antd/lib/layout/layout';
import React from 'react';

const LayoutBody = ({ children }) => {
  return (
    <div className="site-layout">
      <Content className="keep-scrolling">
        <div className="site-layout-background" style={{ padding: 15 }}>
          {children}
        </div>
      </Content>
    </div>
  );
};

export default LayoutBody;
