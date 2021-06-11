import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Form, Input, Button, message, Select } from "antd";
import { getHrById } from '../../utils/drafts/hr.utils'

import "antd/dist/antd.css";
import "./Hr-Register";


const { Option } = Select;
const companyFields = ['Finance', 'BioTech', 'cyber']
type SizeType = Parameters<typeof Form>[0]["size"];

export default function CompanyForm(props: any) {
  const { companyName } = props
  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } }


  const { id, token } = useParams<Record<string, string | undefined>>()
  const [companyData, setCompanyData] = useState({
    name: companyName,
    field: '',
    info: '',
    phone: '',
    address: '',
    company: '',
    isAuth: false,
  })

  useEffect(() => {
    console.log(companyData);
    // consider async function instead of nesting  ===> (async () => {})() : IIFE‏
    // setHrData({ ...hrData, company: data.data.company, email: data.data.email });

  }, [])

  const onFinish = async (values: any) => { console.log('finished') }
  const onFinishFailed = (errorInfo: any) => { console.log('Failed:', errorInfo) }

  return (
    <>
      {/* field: String,
        info: String,
        phone: String,
        address: String,
        img: { */}
      <h1>{companyName}</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item style={{ display: 'flex', justifyContent: 'left' }} label="תחום החברה" name="programmingLang">
          <Select
            mode="multiple"
            placeholder="Select language"
            optionLabelProp="label">
            {(companyFields).map((itemValue: any, index: any) => <Option key={index} value={itemValue} label={itemValue}>
              <div className="demo-option-label-item">{itemValue}</div>
            </Option>)}
          </Select>
        </Form.Item>
        <Form.Item label="תיאור החברה" name="companyInfo" rules={[{ required: true, message: 'הכנס מידע על החברה' }]}>
          <Input id="fullName" onChange={e => setCompanyData({ ...companyData, info: e.target.value })} placeholder="ג'ון סמית" />
        </Form.Item>
        <Form.Item label="אתר החברה" name="siteLink" rules={[{ required: true, message: 'הוסף קישור ' }]}>
          <Input id="fullName" onChange={e => setCompanyData({ ...companyData, info: e.target.value })} placeholder="ג'ון סמית" />
        </Form.Item>
        <Form.Item label="אתר החברה">
          <Input />
        </Form.Item>
        <Form.Item label="מי אנחנו?">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="שם ארגון">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form>
    </>
  );
};

