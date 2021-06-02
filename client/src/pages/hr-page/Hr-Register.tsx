import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
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
} from 'antd';

type SizeType = Parameters<typeof Form>[0]['size'];


const FormSizeDemo = () => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
      setComponentSize(size);
    };

  return (
    <>
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
        <Form.Item label="שם מלא">
          <Input />
        </Form.Item>
        <Form.Item label="טלפון">
          <Input />
        </Form.Item>
        <Form.Item label="סיסמה">
          <Input />
        </Form.Item>
        <Form.Item label="וודא סיסמה">
          <Input />
        </Form.Item>
        <Form.Item label="שם ארגון">
          <Input />
        </Form.Item>
       
      </Form>
    </>
  );
};

export default FormSizeDemo 