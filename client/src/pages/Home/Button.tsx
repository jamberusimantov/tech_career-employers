import React, { useState } from 'react'
import { Button } from 'antd';
import { Menu, Dropdown } from 'antd';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { DownOutlined } from '@ant-design/icons';


export default function ButtonToggle() {
    const [toggleOn, setToggleOn] = useState(false)
    const clickHandler = (e:any)=>{
        e.preventDefault();
        console.log(e);
        
    }
    const menu = (
                <Space direction="vertical">
                    <Input.Password placeholder="input password" />
                    <Input.Password
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Space>
    );
    return (
        <>
            <Dropdown overlay={menu} trigger={['click']} >
                <a className="" onClick={clickHandler}>
                    SignIn <DownOutlined />
                </a>
            </Dropdown>
        </>
        // <Button type="primary" className="signin" onClick={() => setToggleOn(previousState => !previousState)}> Sign in</Button>

    )
}
