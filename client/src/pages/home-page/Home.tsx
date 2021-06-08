import { Layout, Breadcrumb } from "antd";
import Slider from "../../components/slider/Slider";
import About from "../../components/About/About"
import Coops from "../../components/coops/Coops"
// import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <div>
      <Layout>
        <Layout>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
            </Breadcrumb>
            <Content className="site-layout-background">
              <h1 className="h1topic">
                טק קריירה - הדרך שלך להייטק !
              </h1>
              <Slider />
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