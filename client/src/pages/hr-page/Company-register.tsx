import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Form, Input, Button, message, Select } from "antd";
import { getHrById } from '../../utils/drafts/hr.utils'
import { getCompany } from '../../utils/drafts/company.utils'

import "antd/dist/antd.css";
import "./Hr-Register";
import { updateCompanyById } from '../../utils/drafts/company.utils';


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
    siteLink: '',
    isAuth: true,
  })

  useEffect(() => {
    console.log(companyData);
    getCompany({ name: companyData.name }, 'id').then((data) => {console.log(data) })

    // consider async function instead of nesting  ===> (async () => {})() : IIFE‏
    // setHrData({ ...hrData, company: data.data.company, email: data.data.email });

  }, [])

  const onFinish = async (values: any) => {
    const { field, about, siteLink } = values;

    updateCompanyById(companyData,).then((data) => { console.log(data) })
    console.log(companyData)
  }
  const onFinishFailed = (errorInfo: any) => { console.log('Failed:', errorInfo) }

  return (
    <>

      <h1>{companyName}</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item style={{ display: 'flex', justifyContent: 'left' }} label="תחום החברה" name="field" rules={[{ required: true, message: 'שדה חובה ' }]}>
          <Select
            mode="multiple"
            placeholder="בחר מתוך הרשימה..."
            optionLabelProp="label">
            {(companyFields).map((itemValue: any, index: any) => <Option key={index} value={itemValue} label={itemValue}>
              <div className="demo-option-label-item">{itemValue}</div>
            </Option>)}
          </Select>
        </Form.Item>
        <Form.Item label="אתר החברה" name="siteLink" rules={[{ required: true, message: 'הוסף קישור ' }]}>
          <Input id="fullName" onChange={e => setCompanyData({ ...companyData, siteLink: e.target.value })} />
        </Form.Item>
        <Form.Item label="אודות החברה" name="companyInfo" rules={[{ required: true, message: 'הכנס מידע על החברה' }]}>
          <Input.TextArea id="fullName" onChange={e => setCompanyData({ ...companyData, info: e.target.value })} />
        </Form.Item>


        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form>
    </>
  );
};

