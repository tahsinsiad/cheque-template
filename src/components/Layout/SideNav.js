import React from 'react';
import {
  HistoryOutlined,
  PrinterOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { menuStyle, siderStyle } from './layoutStyle.css';

const SideNav = () => {
  const { Sider } = Layout;
  return (
    <Layout style={{ flex: '0 1 0% ', background: 'none' }}>
      <Sider collapsed={true} style={siderStyle}>
        <div className="logo">LOGO</div>
        <Menu
          style={menuStyle}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          se
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Nav 1 </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PrinterOutlined />}>
            <Link to="/print">Print </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<HistoryOutlined />}>
            <Link to="/history">History</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default SideNav;
