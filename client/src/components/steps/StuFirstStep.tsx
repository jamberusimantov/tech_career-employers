import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 20 },
  };
const StuFirstStep = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    
    return (
      <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
  <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
       <Form.Item
        label="שם פרטי + משפחה"
        name="name"
        rules={[{type:'string', required: true, message: 'Please input your full name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="טלפון"
        name="phone"
        rules={[{type:'number', required: true, message: 'Please input your phone!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="אימייל"
        name="email"
        rules={[{type:'email', required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="סיסמא"
        name="password"
        rules={[{type:'string', required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="אישור סיסמא"
        name="passwordConfirm"
        rules={[{type:'string', required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
      </div>
      
    )
}

export default StuFirstStep
