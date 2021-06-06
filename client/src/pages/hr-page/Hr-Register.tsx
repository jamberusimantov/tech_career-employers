
import ReactDOM from "react-dom";
import React, { useEffect } from 'react'
import usersActions from '../../redux/actions/user.actions';
import { useState } from 'react';
// import logIn from "../../utils/login.utils";
import { getHrById } from '../../utils/drafts/hr.utils'
import "antd/dist/antd.css";
import { Form, Input, Button, Typography } from "antd";
// const { signUpUser } = logIn;
const { Title } = Typography;
type SizeType = Parameters<typeof Form>[0]["size"];
// {success: true, data: {…}, message: "success on getHrByUrlId"}
// data:
// company: "jamberTech"
// date: "2021-06-04T01:52:58.049Z"
// email: "jamberu.simantov@gmail.com"
// isCompanyFirstUser: false
// __v: 0
// _id: "60b9877a2b619847d84d17a3"
// __proto__: Object
// message: "success on getHrByUrlId"
// success: true
// __proto__: Object
export default function HrRegisterForm() {

  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } }
  useEffect(() => {
    let urlParam = {
      recruiterId: '60b9877a2b619847d84d17a3',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI5ODc3YTJiNjE5ODQ3ZDg0ZDE3YTMiLCJlbWFpbCI6ImphbWJlcnUuc2ltYW50b3ZAZ21haWwuY29tIiwiaWF0IjoxNjIyNzcxNTc4LCJleHAiOjE3MDkxNzE1Nzh9.iFaLe_FL_sMYkZtwHN1CPVwmtAKZNmBkZhTGYJuFfDY'
    }

    getHrById(urlParam.recruiterId, urlParam.token).then(data => {
      console.log();
      setCompany(data.data.comapny); setEmail(data.data.email);
    });
  }
  , [])


const [email, setEmail] = useState('')
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [password, setPassword] = useState('')
const [company, setCompany] = useState('')
const [error, setError] = useState('')

const hrData = {
  email: email,
  name: '',
  phone: '',
  password: '',
  companyName: company
}

const onFinish = async (values: any) => {
  const email: any = values.email
  const name: any = values.name
  const phone: any = values.phone
  const password: any = values.password
  const companyName: any = values.companyName

}
const onFinishFailed = (errorInfo: any) => { console.log('Failed:', errorInfo) }



return (
  <>
    {/* <Title>הרשמת מגייסים</Title> */}
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label='דוא"ל' name="email" rules={[{ required: true, message: 'בבקשה להקליד מייל' }]}>
        <Input onChange={e => setEmail(e.target.value)} value={email} placeholder="mail@gmail.com" />
      </Form.Item>
      <Form.Item label="שם מלא" name="name" rules={[{ required: true, message: 'בבקשה הקלד שם מלא' }]}>
        <Input id="fullName" onChange={e => setName(e.target.value)} placeholder="ג'ון סמית" />
      </Form.Item>
      <Form.Item label="טלפון" name="phone" rules={[{ required: true, message: 'בבקשה הקלד מספר טלפון תקין' }]}>
        <Input id="phoneNumber" onChange={e => setPhone(e.target.value)} />
      </Form.Item>
      <Form.Item label="סיסמה" name="password" rules={[{ required: true, message: 'בבקשה הקלד סיסמה תקינה' }]}>
        <Input id="password" onChange={e => setPassword(e.target.value)} placeholder="********" />
      </Form.Item>
      <Form.Item label="וודא סיסמה" name="password1" rules={[{ required: true, message: 'בבקשה הקלד סיסמה תקינה' }]}>
        <Input id="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} placeholder="********" />
      </Form.Item>
      <Form.Item label="שם ארגון" name="companyName">
        <Input id="companyName" />
      </Form.Item>
      <Button id="submitBtn" type="primary" htmlType="submit">
        Submit
        </Button>
        {/* updateHrById({phone:'1800bootstrapON'},"60b61267ac39f113dedb0439",token).then(data => console.log(data)) */}
    </Form>

  </>
);
  }



