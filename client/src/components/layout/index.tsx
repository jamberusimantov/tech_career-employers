import AdminRouter from "../../AdminRouter";
import { Link } from "react-router-dom";
import { Button, Layout, Menu, Modal } from "antd";
import { useState, useEffect } from "react";
import Login from "../loginForm/Login";
import service from "../../utils";
import "./style.css";
import "antd/dist/antd.css";
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

  return (
    <Layout className="mainlay">
 
      <Header className="header">
        <div>
          {isLoggedIn ? (
            <>
            <Button size="large" type="primary" onClick={logOutHandler}>
              התנתק{" "}
            </Button>
            <Link style={{padding:'0 15px'}} to="/privateStudent">אזור אישי</Link>
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
        {/* <div>
          <Menu theme="light" mode="vertical" style={{ textAlign: "center",display: 'flex'}} >
            {isLoggedIn && 
              <>
              <Menu.Item key="1"><Link to="/">דף הבית</Link></Menu.Item>
              <Menu.Item key="2"><Link to="hr">מגייסים</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/student">סטודנטים</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/recruiter">משרות</Link></Menu.Item>
              {role === 'Admin' && <Menu.Item key="5"><Link to="/admin">הנהלה</Link></Menu.Item>}
              </>}
          </Menu>
        </div> */}
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
               {role === 'Admin' &&
               <Menu.Item key="1" className="menIt">
               <Link to="/admin">
                 <b>הנהלה</b>
               </Link>
             </Menu.Item>} 
                <Menu.Item key="5" className="menIt">
                  <Link to="/recruiter">
                    <b>משרות</b>
                  </Link>
                </Menu.Item>
                {role === "Admin" && (
                  <Menu.Item key="6">
                    <Link to="/admin">הנהלה</Link>
                  </Menu.Item>
                )}
              </>
            )}
          </Menu>
        </div>

        <div className="imgdiv">
          <img src="/img/Logo.png" alt="" className="logo" />
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
  );
}

export default LayoutMain;
