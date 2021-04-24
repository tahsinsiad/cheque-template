import React from 'react';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { menuStyle, siderStyle } from './layoutStyle.css';

const SideNav = () => {
  const { Sider } = Layout;
  return (
    <Layout style={{ flex: '0 1 0% ' }}>
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
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/nav2">Nav 2 </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default SideNav;
