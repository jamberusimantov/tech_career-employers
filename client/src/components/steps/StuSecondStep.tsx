import React from 'react'
import { Form, Input, Button, Checkbox, Upload, message, } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 5 },
};

const StuSecondStep = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info:any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
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
          label="לינק לגיטהב"
          name="gitlink"
          rules={[{type:"url", required: true, message: 'Please upload your github link!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="לינק פייסבוק"
          name="facebooklink"
          rules={[{ required: true, message: 'Please upload your github link!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="לינק לינקדין"
          name="linkedinlink"
          rules={[{ required: true, message: 'Please upload your github link!' }]}
        >
          <Input />
        </Form.Item>

      <Upload {...props}>
        <Button icon={<UploadOutlined />}>העלאת קורות חיים</Button>
      </Upload>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>העלאת תמונת פרופיל</Button>
      </Upload>
  
      </Form >
    )
}

export default StuSecondStep
