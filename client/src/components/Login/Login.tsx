import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css';

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (

        <div className="loginContainer">

            <Form

                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <div></div>
                <div>            <Form.Item
                    label="בבקשה הכנס מייל"
                    name="username"
                    rules={[{ required: true, message: 'Please enter your email' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="מייל" />
                </Form.Item>
                    <Form.Item
                        label="בבקשה הכנס סיסמה"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="סיסמה"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>זכור אותי</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="#">
                            שכחתי סיסמה
        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            הכנס
        </Button>
                        {/* Or <a href="">register now!</a> */}
                    </Form.Item></div>
                <div></div>

            </Form>
        </div>
    )
}



export default Login;


