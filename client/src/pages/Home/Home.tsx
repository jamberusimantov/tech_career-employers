import React from "react";
import { Link } from 'react-router-dom'
import { Input,Space } from 'antd'
import { Layout, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "./Home.css";
import LoginModal from "../Home/LoginModal";
import Slider from "./Slider";
import About from "./About"
import Coops from "./Coops"


// import PagesRouter from '../../PagesRouter'


// import { Menu} from 'antd';
// const menu = (
//   <Menu>
//     <Menu.Item>
//       <Space direction="vertical">
//     <Input placeholder="Basic usage"  />
//     <Input placeholder="Basic usage1" />
//       </Space>
//     </Menu.Item>
//   </Menu>
// );
const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <div>
      <Layout>
        {/* <Header className="header">

          <div className="headerlist">
            <LoginModal />

            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["4"]}>
              <Menu.Item key="4"><Link to="/">דף הבית</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/Students">סטודנטים</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/Hr">מגייסים</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/admin">הנהלה</Link></Menu.Item>
            </Menu>
            <img className="tcLogo1" src="./images/tcLogo.png" alt="" />
          </div>
        </Header> */}
        <Layout>


          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>

            </Breadcrumb>
            <Content className="site-layout-background">
              <h1 className="h1topic">
                טק קריירה - הדרך שלך להייטק !
              </h1>
              <Slider />
              {/* <PagesRouter/> */}
            </Content>
          </Layout>
        </Layout>
        <About />
        <Coops />
        <Footer>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}



