import * as React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Hr-Register";

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];

const CompanyForm = () => {
    const [componentSize, setComponentSize] = useState<SizeType | "default">(
        "default"
    );
   
    const [companyName, setCompanyName] = useState('Company Name')

    return (
        <>
        <h1>{companyName}</h1>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
            >
                <Form.Item label="אימייל">
                    <Input />
                </Form.Item>
                <Form.Item label="תחום החברה">
                    <Input />
                </Form.Item>
                <Form.Item label="אתר החברה">
                    <Input />
                </Form.Item>
                <Form.Item label="מי אנחנו?">
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item label="שם ארגון">
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">
          Submit
        </Button>
            </Form>
        </>
    );
};

export default CompanyForm;
