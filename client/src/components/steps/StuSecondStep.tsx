import React, { useState } from 'react'
import { Form, Input, Button} from 'antd';
import FileBase from 'react-file-base64'

const layout = {labelCol: { span: 10 },wrapperCol: { span: 5 }};

const StuSecondStep = (props: any) => {
  const { inputHandler, updateStudent } = props
  const [picData, setPicData] = useState('')
  const onFinish = (values: any) => {
    const rdyObj = {links:{github:values.gitlink,facebook:values.facebooklink,linkedIn:values.linkedinlink,personalSite:values.personalSite},profilePicture:picData,steps:3}
    updateStudent(rdyObj)
    inputHandler(2)
  }
  const onFinishFailed = (errorInfo: any) => {console.log('Failed:', errorInfo)};

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {/* Form item github link */}
      <Form.Item label="לינק לגיטהב" name="gitlink"
        rules={[{ type: "url", required: true, message: 'הכנס לינק לדף הגיטהב שלך!' }]}>
        <Input />
      </Form.Item>

      {/* Form item facebook link */}
      <Form.Item label="לינק פייסבוק" name="facebooklink"
        rules={[{ required: true, message: 'הכנס לינק לדף הפייסבוק שלך!' }]}>
        <Input />
      </Form.Item>

      {/* Form item linkedIn link */}
      <Form.Item label="לינק לינקדין" name="linkedinlink"
        rules={[{ required: true, message: 'הכנס לינק לדף הלינקדין שלך!' }]}>
        <Input />
      </Form.Item>

      {/* Form item portfolio link */}
      <Form.Item label="לינק לפורפוליו" name="personalSite"
        rules={[{ required: true, message: 'הכנס לינק לדף הפורטפוליו שלך!' }]}>
        <Input />
      </Form.Item>

      {/* Form item profile img */}
      <Form.Item label="תמונת פרופיל" name="profilePic">
        <FileBase type="file" multiple={false} onDone={({ base64 }: any) => { setPicData(base64)}} />
      </Form.Item>

       {/* Submit btn */}
      <Button style={{ margin: '15px 0' }} id="submitBtn" type="primary" htmlType="submit">Submit</Button>
    </Form >
  )
}

export default StuSecondStep
