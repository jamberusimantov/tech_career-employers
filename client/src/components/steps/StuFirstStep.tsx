import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
function phoneChecker(input:any)
{
  let phoneNum = /^\d{10}$/
  if(input.value.match(phoneNum)){
    return true;
  }else { alert("message"); return false}}

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 20 },
};
const StuFirstStep = (props: any) => {
  const { inputHandler } = props
  const onFinish = (values: any) => {
    inputHandler(2)
  }
  const onFinishFailed = (errorInfo: any) => { console.log('Failed:', errorInfo) };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
          rules={[{ type: 'string', required: true, message: 'הכנס שם מלא!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="טלפון"
          name="phone"
          
          rules={[{  required: true, message: 'הכנס פלאפון!' }]}
          >
           <Input placeholder="0548174393"/>
        </Form.Item>

        <Form.Item
          label="אימייל"
          name="email"
          rules={[{required: true, message: 'הכנס אימייל!' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'הכנס סיסמא!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'הכנס אישור סיסמא!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Button id="submitBtn" type="primary" htmlType="submit">Submit</Button>
      </Form>
    </div>

  )
}

export default StuFirstStep
