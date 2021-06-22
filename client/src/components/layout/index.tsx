import AdminRouter from "../../AdminRouter";
// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';
import { Button, Layout, Menu, Modal, Row, Col } from "antd";
import { useState, useEffect } from "react";
import Login from "../loginForm/Login";
import service from "../../utils";
import "./style.css";
import "antd/dist/antd.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const { login } = service;
const { Header, Content, Footer } = Layout;

function LayoutMain(props: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [token, setToken] = useState(login.getToken());
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const logOutHandler = () => {
    login.removeToken();
    window.location.reload();
  };

  const tokenHandler = async () => {
    if (token) {
      const userData = await login.getUserUseToken(token);
      if (userData.success) {
        setIsLoggedIn(true);
        setRole(userData.data.role);
        setName(userData.data.name);
      }
    }
  };
  useEffect(() => {
    tokenHandler();
  }, [isLoggedIn]);

  // useEffect of on scroll animation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    // <Row>
    //   <Col md={24} lg={8}>
    <Layout className="mainlay">
      <Header className="header">

        <div>

          {isLoggedIn ? (
            <>
              <Button size="large" type="primary" onClick={logOutHandler}>
                התנתק{" "}
              </Button>
              <Link style={{ padding: "0 15px" }} to="/privateStudent">
                אזור אישי
              </Link>
            </>
          ) : (
            <Button size="large" type="primary" onClick={showModal}>
              התחבר{" "}
            </Button>
          )}
          <Modal
            title="התחברות"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
          >
            <Login />
          </Modal>
        </div>
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="6" className="menIt">
            <Link to="homePage" smooth={true} duration={1000}>
              <b>דף הבית</b>
            </Link>
          </Menu.Item>
          <Menu.Item key="7" className="menIt">
            <Link to="about" smooth={true} duration={1000}>
              <b> מי אנחנו?</b>
            </Link>
          </Menu.Item>
          <Menu.Item key="8" className="menIt" >
            <Link to="courses" smooth={true} duration={1000} >
              <b> קורסים</b>
            </Link>
          </Menu.Item>
          <Menu.Item key="9" className="menIt">
            <Link to="graduates" smooth={true} duration={1000}>
              <b> בוגרים</b>
            </Link>
          </Menu.Item>
        </Menu>

        <div>
          <Menu theme="light" mode="horizontal">
            {isLoggedIn && (
              <>
                <Menu.Item key="4" className="menIt">
                  <Link to="/">
                    <b> דף הבית</b>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3" className="menIt">
                  <Link to="/student">
                    <b>סטודנטים</b>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" className="menIt">
                  <Link to="/hr">
                    <b>מגייסים</b>
                  </Link>
                </Menu.Item>
                {role === "Admin" && (
                  <Menu.Item key="1" className="menIt">
                    <Link to="/admin">
                      <b>הנהלה</b>
                    </Link>
                  </Menu.Item>
                )}
                <Menu.Item key="5" className="menIt">
                  <Link to="/recruiter">
                    <b>משרות</b>
                  </Link>
                </Menu.Item>
              </>
            )}
          </Menu>
        </div>

        <div className="imgdiv">
          <img src="/img/logo.png" alt="" className="logo" />
        </div>
      </Header>
      <Content>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <AdminRouter />
          </Content>
        </Layout>
      </Content>

      <img />
    </Layout>
    // </Col>
    // </Row>
  );
}

export default LayoutMain;
