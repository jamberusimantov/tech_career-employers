import React, { useEffect, useState } from 'react'
import { getHrById, updateHrById } from '../../utils/drafts/hr.utils'
import "antd/dist/antd.css";
import { Form, Input, Button, Spin, Image, message } from "antd";
import { useHistory, useParams } from 'react-router-dom';
import FileBase from 'react-file-base64'

export default function HrRegisterForm() {
  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } }
  const history = useHistory()
  const [linkValidator, setLinkValidator] = useState(true)
  // to fix to better looking solution
  const { id, token } = useParams<Record<string, string | undefined>>()
  const [hrData, setHrData] = useState({
    id,
    email: '',
    name: '',
    phone: '',
    password: '',
    password1: '',
    company: '',
    isAuth: true,
    profilePicture: ''
  })

  useEffect(() => {
    // consider async function instead of nesting  ===> (async () => {})() : IIFE

    const getHrrById = async () => {
      const data = await getHrById(hrData.id || '', token)
      if (!data.success) {
        setLinkValidator(false)
      }
      else if (data.success && data?.data?.name) {
        setLinkValidator(false)
      } else {
        setHrData({ ...hrData, company: data.data.company, email: data.data.email })
      }
      console.log(data);
    }
    getHrrById()
  }, [hrData,token])

  const onFinish = async (values: any) => {
    await updateHrById(hrData, hrData.id, token)
    message.success('ההרשמה הסתיימה בהצלחה')
    setInterval(() => { history.push("/"); }, 1000)
  }
  const onFinishFailed = (errorInfo: any) => { console.log('Failed:', errorInfo) }


  return (
    <>

      {/* Start with spinner in this tennary add second return to make it more readable */}

      {
        !linkValidator ?
          <h1>Link is Invalid</h1>
          :
          !(hrData?.email && hrData?.company) ?
            <Spin />
            :
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true, email: hrData.email, company: hrData.company }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item label='דוא"ל' name="email" rules={[{
                type: 'email',
                message: ' הכנס דו"אל תקין!',
              }, { required: true, message: 'בבקשה להקליד מייל' }]}>
                <Input disabled={true} placeholder="mail@gmail.com" />
              </Form.Item>
              <Form.Item label="שם מלא" name="name" rules={[{ required: true, message: 'הכנס שם מלא' }]}>
                <Input id="fullName" onChange={e => setHrData({ ...hrData, name: e.target.value })} placeholder="ג'ון סמית" />
              </Form.Item>
              <Form.Item label="טלפון" name="phone" rules={[{ required: true, message: 'הכנס מספר טלפון תקין' }]}>
                <Input id="phoneNumber" onChange={e => setHrData({ ...hrData, phone: e.target.value })} />
              </Form.Item>
              <Form.Item
                name="password"
                label="סיסמה"
                rules={[
                  {
                    required: true,
                    message: '  הכנס סיסמה תקינה!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password onChange={e => { setHrData({ ...hrData, password: e.target.value }) }} />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="וודא סיסמה"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'אנא וודא את הסיסמה!',
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
                <Input.Password onChange={e => { setHrData({ ...hrData, password1: e.target.value }) }} />
              </Form.Item>

              <Form.Item label="שם ארגון" name="company">
                <Input id="company" disabled={true} />
              </Form.Item>
              <Form.Item label="תמונת פרופיל" name="profilePic">
                <FileBase type="file" multiple={false} onDone={({ base64 }: any) => { setHrData({ ...hrData, profilePicture: base64 }) }} />
              </Form.Item>
              <Button id="submitBtn" type="primary" htmlType="submit">
                Submit
              </Button>
              {hrData.profilePicture && <Image
                width={200}
                src={hrData.profilePicture}
              />}
            </Form>

      }
    </>
  );
}




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