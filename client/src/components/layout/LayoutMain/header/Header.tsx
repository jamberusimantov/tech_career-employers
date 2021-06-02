import React from 'react'
import { Layout} from "antd";
import {Link} from 'react-router-dom'
import LoginModal from '../../../../pages/Home/LoginModal'
import { Menu} from 'antd';

export default function Header() {
    const { Header} = Layout;
    return (
        <div>
        <Header className="header">

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
        </Header>
        </div>
    )
}
