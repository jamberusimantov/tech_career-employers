import React,{useState} from 'react'
import { Form, Input, Button, Select } from 'antd';
import { connect } from 'react-redux';
import usersActions from '../../redux/actions/user.actions';
import LogIn from '../../utils/login.utils';
const { Option } = Select;

const { loginUser, setTokenLocal } = LogIn
const { setUserData } = usersActions.usersActions;

const mapDispatchToProps = (dispatch: any) => ({setUserData: (data: Object) => { dispatch(setUserData(data)) }})
const mapStateToProps = (state: any) => { return { userData: state.user.userData } }

const Login = (): any => {
    const [role, setRole] = useState('student')
    const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } }
    const tailLayout = { wrapperCol: { offset: 8, span: 16 } }

    const onFinish = async (values: any) => {
        const email: any = values.email
        const password: any = values.password
        const resFromLogin = await loginUser({ email, password }, role)
        console.log(resFromLogin);
        console.log(email);
        console.log(password);
        
        if (resFromLogin.success) {
            const token = resFromLogin.token
            setTokenLocal(token)
            setUserData(token)
            window.location.reload();

        } else { alert('נסה שוב') }

    }
    const onFinishFailed = (errorInfo: any) => { console.log('Failed:', errorInfo) }
    const handleChange = (value: any) =>{
        setRole(value)
    }
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="אימייל"
                name="email"
                rules={[{ required: true, message: 'הכנס אימייל!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="סיסמא"
                name="password"
                rules={[{ required: true, message: 'הכנס סיסמא!' }]}
            >
                <Input.Password />
            </Form.Item>


            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <Form.Item  {...tailLayout} >
                    <Button type="primary" htmlType="submit"> התחבר </Button>
                </Form.Item>
                <Select defaultValue="student" style={{ width: 120, height: '110%' }} onChange={handleChange}>
                    <Option value="student">Student</Option>
                    <Option value="hr">Hr</Option>
                    <Option value="admin">Admin</Option>
                </Select>
            </div>
        </Form>
    );
};



export default connect(mapStateToProps, mapDispatchToProps)(Login)