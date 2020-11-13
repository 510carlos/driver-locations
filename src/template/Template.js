import React, { useState } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import { MapContainer } from '../map';

import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;

const Template = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsedStatus) => setCollapsed(!!collapsedStatus);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<TeamOutlined />}>
            Drivers
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Map of Drivers</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ minHeight: 360, backgroundColor: 'white' }}
          >
            <MapContainer />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made by: Carlos Mendoza</Footer>
      </Layout>
    </Layout>
  );
};

export default Template;
