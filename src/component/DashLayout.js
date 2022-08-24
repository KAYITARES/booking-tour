import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import 'antd/dist/antd.css';
import './dash.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

const App = ({children,menuSelectorIndex}) => {
    const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[`${menuSelectorIndex}`]}
          items={[
            {
              key: '1',
              icon: <UserOutlined onClick={()=>navigate("/admin/dashboard")}/>,
              label:  <h4 onClick={()=>navigate("/admin/dashboard")} style={{color:"white"}}>Dashboard</h4>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined onClick={()=>navigate("/admin/users")}/>,
              label: <h4 onClick={()=>navigate("/admin/users")} style={{color:"white"}}>Manage Users</h4>,
            },
            {
              key: '3',
              icon: <UploadOutlined onClick={()=>navigate("/admin/trips")}/>,
              label: <h4 onClick={()=>navigate("/admin/trips")} style={{color:"white"}}>Manage Trips</h4>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: "80vh",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;