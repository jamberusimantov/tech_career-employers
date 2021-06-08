import React from 'react'
import { Form, Input, Button, Checkbox, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 5 },
};

const StuThirdStep = () => {
    const onFinish = (values: any) => { console.log('Success:', values); };
    const handleChange = (value: any) => { console.log(`selected ${value}`); }
    const onFinishFailed = (errorInfo: any) => { console.log('Failed:', errorInfo); };
    const programmingLangArr: any = { fullstack: 'Full-Stack', dev: 'DevNet', qa: 'QA', mongodb: 'MongoDB', typescript: 'Type-Script', python: 'Python', nodejs: 'NodeJS', c: 'C', css: 'CSS', html: 'HTML', 'c#': 'C#', java: 'Java', 'c++': 'C++', php: 'PHP' }
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >

                {/* שם הקורס */}
                <div style={{ display: 'flex', justifyContent: 'left' }}>
                    <h1 style={{ padding: '0 10px' }}>שם קורס:</h1>
                    <Select defaultValue="Full-Stack" style={{ width: 120 }} onChange={handleChange} >
                        <Option value="fullstack">Full-Stack</Option>
                        <Option value="dev">DevNet</Option>
                        <Option value="qa">QA</Option>
                    </Select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'left', margin: '15px 0' }}>
                    <h1 style={{ padding: '0 5px' }}>שפות תיכנות:</h1>
                    <Select
                        mode="multiple"
                        style={{ width: '150%' }}
                        placeholder="Select language"
                        defaultValue={['Java-Script']}
                        onChange={handleChange}
                        optionLabelProp="label"
                    >

                        {Object.entries(programmingLangArr).map(([itemKey, itemValue]: any, index: any) => <Option key={index} value={itemKey} label={itemValue}>
                            <div className="demo-option-label-item">{itemValue}</div>
                        </Option>)}

                    </Select>
                </div>
                {/* שפות שלמדת */}

                <div style={{ display: 'flex', justifyContent: 'left' }}>
                    <h1>קצת על עצמך :</h1>
                    <TextArea rows={8} />
                </div>
            </Form>
        </div>

    )
}

export default StuThirdStep









