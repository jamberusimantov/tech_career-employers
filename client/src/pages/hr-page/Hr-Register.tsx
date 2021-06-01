import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const HrRegForm = () => {
    const [form] = Form.useForm()
    const onFinish = () => { }
    return (
        <>
        <Title>Reqruiter Registration</Title>
        <Form form={form}
            name="register"
            onFinish={onFinish}>
            <Form.Item
                name="email"
                label="E-mail"
                style={{ width: "400px" }}>
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                style={{ width: "400px" }}>
                <Input.Password />
            </Form.Item>
        </Form>
        </>
    )
}

export default HrRegForm
