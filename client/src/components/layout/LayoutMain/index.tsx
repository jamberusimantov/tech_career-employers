import React from "react";
import ReactDOM from "react-dom";
// import "./LayoutMain.css";
import Sidebar from '../../Sidebar/Sidebar.tsx'
import { Link } from "react-router-dom";
import './style.css';
import AdminRouter from '../../../AdminRouter'
import { Layout, Menu, Breadcrumb } from "antd";
import Login from '../../Login/Login'
import "antd/dist/antd.css";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function LayoutMain() {
  return (
    <Layout>
      <Header className="header">
        <div className="imgdiv">
          <img src="/img/Logo.png" alt="" className="logo" />
        </div>

        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="4"><Link to="/">דף הבית</Link></Menu.Item>
          <Menu.Item key="3">סטודנטים</Menu.Item>
          <Menu.Item key="2">מגייסים</Menu.Item>
          <Menu.Item key="1"><Link to="/admin">הנהלה</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>

        {/* the sidebar moved to a separate component (the sidebar removed to Or request) */}

        {/* Home List App removed to Or request */}

        <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>


            {/* Admin Router */}
            <AdminRouter />
           

          </Content>
        </Layout>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default LayoutMain;
