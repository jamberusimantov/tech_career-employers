import React,{useState} from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./student-personal.css";
import { Layout } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import service from "../../utils";
const { login } = service;
const { Header, Footer, Sider, Content } = Layout;

export default function StudentPersonal() {
  const [userData, setUserData] = useState()


  return (
      <Content>
          <div className="userCardFrame">
            <div className="userInfo">
              <div className="nameUserCard">Aviv Tarkay</div>
              <div className="emailUserCard">aviv@gmail.com</div>
              <div className="courseDateUserCard">course date</div>
              <div className="aboutUserCard">about</div>
              <div className="jobsTimlineUserCard">job timeline</div>
              <div className="skillsUserCard">skills</div>

              <div className='icons'>
                <GithubOutlined />
                <FacebookOutlined />
                <LinkedinOutlined />
              </div>

              <br />
              <button className="editButtonUserCarrd">edit</button>
            </div>
            <div className="userCardImage">
              <img src="/welcom.png"></img>
            </div>
          </div>
      </Content>
  );
}