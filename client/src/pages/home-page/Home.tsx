// import { Layout, Breadcrumb } from "antd";
import Slider from "../../components/slider/Slider";
// import About from "../../components/about/About";
import Coops from "../../components/coops/Coops";
import Courses from '../../components/courses/Courses'
import Collage from '../../components/collage/Collage'
import GraduatesStories from '../../components/graduates-stories/GraduatesStories'
import "./Home.css";
// import { DownCircleFilled } from "@ant-design/icons";
// const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <div className="mainHomeDiv">
      {/* <BackgroundVideo/> */}
      
      <Slider />
      <Collage/>
      <Courses/>
      <GraduatesStories/>
      <Coops />
      
    </div>
  );
}
