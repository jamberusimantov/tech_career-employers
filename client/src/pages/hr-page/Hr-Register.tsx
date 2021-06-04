import * as React from 'react';
import {useState}  from 'react';
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Typography } from 'antd';
const { Title } = Typography;
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
const [currentMail , setCurrentMail] = useState<string>();
  const [currentName, setCurrentName] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentConfirmPassword, setCurrentConfirmPassword] = useState("");
type SizeType = Parameters<typeof Form>[0]["size"];

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <>
  <Title>הרשמת מגייסים</Title>
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
        <Form.Item label="אימייל" name="email">
        <Input type="text" onKeyUp={e => setCurrentMail(e.target.value)} style={{ marginBottom: 16 }} placeholder="mail" />
        </Form.Item >
        <Form.Item label="שם מלא" name="fullName" rules={[]}>
        <Input id="fullName" />
        </Form.Item>
        <Form.Item label="טלפון" name="phoneNumber">
        <Input id="phoneNumber" />
        </Form.Item>
        <Form.Item label="סיסמה" name="password"> 
        <Input id="password" />
        </Form.Item>
        <Form.Item label="וודא סיסמה" name="confirmPassword" style={{width:"50vw"}}>
        <Input id="confirmPassword" />
        </Form.Item>
        <Form.Item label="שם ארגון" name="companyName" style={{width:"50vw"}}>
        <Input id="companyName" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormSizeDemo;
