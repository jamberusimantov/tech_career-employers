import AdminRouter from '../../AdminRouter'
import { Link } from 'react-router-dom';
import { Button, Layout, Menu, Modal } from "antd";
import { useState, useEffect } from 'react';
import Login from '../loginForm/Login'
import service from '../../utils';
import "./style.css";
import "antd/dist/antd.css";
const { login } = service
const { Header, Content, Footer } = Layout;

function LayoutMain(props: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [token, setToken] = useState(login.getToken())
  const [role, setRole] = useState('')
  const [name, setName] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn)
  const showModal = () => { setIsModalVisible(true) }
  const handleCancel = () => { setIsModalVisible(false) }
  const logOutHandler = () => { login.removeToken(); window.location.reload(); }

  const tokenHandler = async () => {
    if (token) {
      const userData = await login.getUserUseToken(token)
      if (userData.success) {
        setIsLoggedIn(true)
        setRole(userData.data.role)
        
        setName(userData.data.name)
      }
    }
  }
  useEffect(() => { tokenHandler() }, [isLoggedIn])

  return (

    <Layout>
      <Header className="header" style={{ display: 'flex',width:'100%', justifyContent: 'space-between' }}>
        <div> 
          {(isLoggedIn) ?
            <div style={{margin:'0 20px', display: 'flex',alignItems:'center',justifyContent: 'space-between'}}>
              <Button style={{margin:'0 10px'}} size="large" type="primary" onClick={logOutHandler}>Logout </Button>
              <h2 style={{margin:' 8px 0 0 0'}}>Welcome {name}</h2>
            </div>
            :
            <Button size="large" type="primary" onClick={showModal}>Login </Button>
          }
          <Modal title="התחברות" visible={isModalVisible} onCancel={handleCancel} footer={null}>
            <Login />
          </Modal>
        </div>

        <div>
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
        </div>

        <div className="imgdiv" style={{margin:'0 20px'}}>
          <img src="/img/Logo.png" alt="" className="logo" />
        </div>
      </Header>
      <Content style={{ padding: "0 50px" }}>

        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <AdminRouter />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default LayoutMain;