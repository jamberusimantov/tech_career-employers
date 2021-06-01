import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./HomePage.css";
import ButtonToggle from "../components/button/Button";
import Slider from "./slider/Slider";
import About from "./aboutUs/About"
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

export default function HomePage() {
  return (
    <div>
      <Layout>
        <Header className="header">
          <Menu theme="white" mode="horizontal" defaultSelectedKeys={["2"]}>
            <div className="headerlist">
              <img className="tcLogo" src="./images/tcLogo.png" alt="" />
              <div className="listItems">
                <Menu.Item className="links" key="1">
                  סטודנטים
                </Menu.Item>
                <Menu.Item className="links" key="2">
                  מגייסים
                </Menu.Item>
                <Menu.Item className="links" key="3">
                  הנהלה
                </Menu.Item>
                <ButtonToggle />
              </div>
            </div>
          </Menu>
        </Header>
        <Layout>
          {/* <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider> */}
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <Content className="site-layout-background">
              <h1 className="h1topic">
            
              </h1>
            
              

              <Slider />
            </Content>
          </Layout>
        </Layout>
        <About />
        <Footer>Ant Design ©️2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}
   
    