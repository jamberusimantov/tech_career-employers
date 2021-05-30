import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Register = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Please enter your name"
                name="username"
                rules={[{ required: true, message: '!Please enter your name' }]}

            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Please enter your last name"
                name="userLastName"
                rules={[{ required: true, message: 'Please enter your last name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Please enter your password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    )
}


export default Register;
