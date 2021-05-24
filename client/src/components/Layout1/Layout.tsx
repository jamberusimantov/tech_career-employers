import React from "react";
import { Layout as Lalala } from "antd";

const { Header, Footer, Sider, Content } = Lalala;

function Layout() {
  return (
    <div>
      <Lalala>
        <Header>Header</Header>
        <Lalala>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Lalala>
        <Footer>Footer</Footer>
      </Lalala>
    </div>
  );
}

export default Layout;
