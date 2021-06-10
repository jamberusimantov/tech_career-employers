import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
const { Header, Footer, Content } = Layout;

export default function userCard() {
  return (
    <Layout>
      <Header>
        {/* <ol>
            <a href=''>
              <li>
              <img src="welcome.jpg"></img>
            </li>
            </a>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Jobs</button>
            </li>
            <li>
              <button>Profile</button>
            </li>
            <li>
              <img src="welcome.jpg"></img>
            </li>
            <li>
              <button>Log out</button>
            </li>
          // </ol> */}
      </Header>
      <Content>
        <div className="textUserCard">
          <div className="textNum1">great!</div>
          <div className="textNum2">Looking good</div>

          <div className="userCardFrame">
            <div className="userInfo">
              <div className="nameUserCard">Aviv Tarkay</div>
              <div className="emailUserCard">aviv@gmail.com</div>
              <div className="courseDateUserCard">course date</div>
              <div className="aboutUserCard">about</div>
              <div className="jobsTimlineUserCard">job timeline</div>
              <div className="skillsUserCard">skills</div>

              {/* <div className="gitHubIcon"> */}
              <div className='icons'>
                <GithubOutlined />
              {/* </div> */}
              {/* <div className="facebookIcon"> */}
                <FacebookOutlined />
              {/* </div> */}
              {/* <div className="LinkdinIcon"> */}
                <LinkedinOutlined />
              {/* </div> */}</div>

              <br />
              <button className="editButtonUserCarrd">edit</button>
            </div>
            <div className="userCardImage">
              <img src="/welcom.png" alt="welcome"></img>
            </div>
          </div>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}