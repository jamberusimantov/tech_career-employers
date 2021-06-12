import React,{useEffect,useState} from 'react'
import { Form, Input, Button, Checkbox, Select, message } from 'antd';
import { useHistory } from "react-router-dom";
import {getAllCourses} from '../../service/admin.service'

const { TextArea } = Input;
const { Option } = Select;
const layout = { labelCol: { span: 10 }, wrapperCol: { span: 5 } };

const StuThirdStep = (props:any) => {
    const [courses, setCourses] = useState([])
    const {updateStudent} = props
    let history = useHistory();

    const onFinish = (values: any) => {        
        const {courseDetails, about,programmingLang} = values;
        const [courseName, courseId] = courseDetails.split('_')
        updateStudent({courseName, about, programmingLang ,courseId ,isAuth:true});
        message.success('Processing complete!')
        setInterval(()=>{history.push("/");},1000)
    };
    useEffect(() => {
        const coursesHandler = async()=>{
            let courses = await getAllCourses();
            setCourses(courses)    
            console.log(courses);
                    
        }   
        coursesHandler();
        }, [])
    const onFinishFailed = (errorInfo: any) => { console.log('Failed:', errorInfo); };
    const programmingLangArr: any = { react: 'React', angular: 'Angular', bootstrap: 'Bootstrap', mongodb: 'MongoDB', typescript: 'Type-Script', python: 'Python', nodejs: 'NodeJS', c: 'C', css: 'CSS', html: 'HTML', 'c#': 'C#', java: 'Java', 'c++': 'C++', php: 'PHP' }
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true, courseDetails: 'Full-Stack', programmingLang:['Java-Script']}}
                style={{ width: '100%'}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                {/* שם הקורס */}
                <Form.Item label="שם הקורס" name="courseDetails" style={{ display: 'flex', justifyContent: 'left' }}>
                    <Select >
                        {courses.map((course:any)=><Option name={course.courseName} label={course.courseName} value={course.courseName + '_' + course._id}>{course.courseName +" "+ course.cycle}</Option>)}
                        {/* <Option value="dev">DevNet</Option>
                        <Option value="qa">QA</Option> */}
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









