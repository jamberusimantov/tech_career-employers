import { Layout, Breadcrumb } from "antd";
import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Coops from "../../components/coops/Coops";
// import LayoutFooter from "../../components/layout/LayoutFooter/";
import "./Home.css";
import { DownCircleFilled } from "@ant-design/icons";
// import { Link } from "react-router-dom";

// import "antd/dist/antd.css";
const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <div className="mainHomeDiv">
      <div className="titelsMain">
        <h1 className="h1title">
          <img className="tcLogo" src="./img/tek.png" alt="" />
          קריירה
        </h1>
        <p className="ptopic"> הדרך שלך להייטק!</p>
        <Slider />

        <a href="#aboutMainDiv">
        <DownCircleFilled className="DownCircleFilled" />
      </a>
      </div>

      <About />

      <Coops />
      {/* <LayoutFooter /> */}
    </div>
  );
}
