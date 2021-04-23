import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import ChequeList from '../Cheque/ChequeList';

const SideNav = ({ children }) => {
  const { Content, Sider } = Layout;
  return (
    <div style={{ display: 'flex', padding: '5px' }}>
      <Layout style={{ flex: '0 1 0% ' }}>
        <Sider
          collapsed={true}
          style={{
            height: '98.5vh',
            // position: 'fixed',
            borderRadius: '15px',
            background:
              '#2d2d49' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            boxShadow: 'rgb(0 0 0 / 25%) 0px 0px 17px 0px',
          }}
        >
          <div className="logo">LOGO</div>
          <Menu
            style={{
              height: 'calc(100% - 70px)',
              borderRadius: '15px',
              background:
                '#2d2d49' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              nav 4
            </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
              nav 5
            </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
              nav 6
            </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
              nav 7
            </Menu.Item>
            <Menu.Item key="8" icon={<ShopOutlined />}>
              nav 8
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
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
            style={{ padding: 24, textAlign: 'center' }}
          >
            Content
          </div>
        </Content>
      </div>
      <div
        style={{
          padding: '15px',
          borderRadius: '15px',
          flex: '0 1 30%',
          boxShadow: 'rgb(0 0 0 / 25%) 0px 0px 17px 0px',
          background:
            '#2d2d49' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
      >
        <h1 style={{ color: '#fff', fontWeight: '900' }}>Past Cheques</h1>
        <ChequeList />
      </div>
    </div>
  );
};

export default SideNav;
