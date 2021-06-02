import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Modal } from 'antd';


export default function LoginModal() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };


  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        התחבר
        </Button>
      <Modal title="Login" visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="אימייל"
            name="email"
            rules={[{ required: true, message: 'הכנס את האימייל שלך בבקשה!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="סיסמא"
            name="password"
            rules={[{ required: true, message: 'הכנס את הסיסמא שלך בבקשה!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>זכור אותי</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              התחבר
        </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>

  )
}
