import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css';

const Login = () => {
    const [error, setError] = useState ('')
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    async function serverCheck() {
    
        const emailValue = document.getElementById("emailInput").value
        
        const passWordValue = document.getElementById("passwordInput").value

        const userInfo = {logInfo:{userEmail:emailValue, userPassword:passWordValue}}
        console.log(JSON.stringify(userInfo));

      const logAproved = await loginUser(userInfo).then((res)=> {
           console.log(res.success);
            return res.success})
       
    if (logAproved) {
        
        setError("good")
    }
    else {
        setError("Please check your password or email")
    }
    
        }

    return (

        <div className="loginContainer">
            <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
            <div></div>
        
        <div>            
        <Form.Item label="בבקשה להקליד מייל" name="username" rules={[{ required: true, message: 'בבקשה להקליד מייל' }]}>
           <Input id="emailInput" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="מייל" />
        </Form.Item>
                    
        <Form.Item label="בבקשה להקליד סיסמה" name="password" rules={[{ required: true, message: 'בבקשה להקליד ססימה' }]}>
            <Input id="passwordInput" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="סיסמה"/>
            <span className="errorMessage">{error}</span>
        </Form.Item>

        <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>זכור אותי</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="#">שכחתי סיסמה</a>
        </Form.Item>

        <Form.Item>
                <Button onClick={serverCheck} type="primary" htmlType="submit" className="login-form-button">הכנס</Button>
                        {/* Or <a href="">register now!</a> */}
        </Form.Item>
                    </div>

                <div></div>

    </Form>
        </div>
    )
}



export default Login;


