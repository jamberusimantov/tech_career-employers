import React from 'react'
import { Form, Input, Button, Select, message } from 'antd';
import { useHistory } from "react-router-dom";

const { TextArea } = Input;
const { Option } = Select;
const layout = { labelCol: { span: 10 }, wrapperCol: { span: 5 } };

const StuThirdStep = (props:any) => {
    const {updateStudent} = props
    let history = useHistory();
    const onFinish = (values: any) => {
        console.log('Success:', values)
        const {courseName, about,programmingLang} = values;
        updateStudent({courseName,about,programmingLang,isAuth:true});
        message.success('Processing complete!')
        setInterval(()=>{history.push("/");},1000)
            
    };
    const onFinishFailed = (errorInfo: any) => { console.log('Failed:', errorInfo); };
    const programmingLangArr: any = { react: 'React', angular: 'Angular', bootstrap: 'Bootstrap', mongodb: 'MongoDB', typescript: 'Type-Script', python: 'Python', nodejs: 'NodeJS', c: 'C', css: 'CSS', html: 'HTML', 'c#': 'C#', java: 'Java', 'c++': 'C++', php: 'PHP' }
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true, courseName: 'Full-Stack',programmingLang:['Java-Script']}}
                style={{ width: '100%'}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                {/* שם הקורס */}
                <Form.Item label="שם הקורס" name="courseName" style={{ display: 'flex', justifyContent: 'left' }}>
                    <Select style={{ width: 120 }}  >
                        <Option name="fullstack" label="Full" value="fullstack">Full-Stack</Option>
                        <Option value="dev">DevNet</Option>
                        <Option value="qa">QA</Option>
                    </Select>
                </Form.Item>
                {/* שפות תכנות */}
                <Form.Item style={{ display: 'flex', justifyContent: 'left' }} label="שפות תיכנות" name="programmingLang">
                    <Select
                        mode="multiple"
                        placeholder="Select language"
                        optionLabelProp="label">
                        {Object.entries(programmingLangArr).map(([itemKey, itemValue]: any, index: any) => <Option key={index} value={itemValue} label={itemValue}>
                            <div className="demo-option-label-item">{itemValue}</div>
                        </Option>)}
                    </Select>
                </Form.Item>
                {/* שפות שלמדת */}

                <Form.Item  label="קצת על עצמך :" name="about">
                    <TextArea rows={8}  />
                </Form.Item>
                {/* <div style={{ display: 'flex', justifyContent: 'left' }}>
                <
                </div> */}
                <Button style={{ margin: '15px 0' }} id="submitBtn" type="primary" htmlType="submit">Submit</Button>
            </Form>
        </div>

    )
}

export default StuThirdStep









