import React,{useState,useEffect} from 'react'
import { Card, Avatar,Spin } from 'antd';
import {getStudentById} from '../../utils/drafts/student.utils'

const { Meta } = Card;


const SpecificStudent = () => {
    let myUserPath = window.location.pathname.slice(13)
    const [student, setStudent] = useState({"phone":'',"name" : '',"pictures":[], "email":'',"courseName": '',"courseCompletionDate":'',"numberOfGraduates":'',"cycle": '', "isWorking":true, "company":'',"role":'',"isAuth": true, "specialty":'',"programmingLang" : []})

    useEffect(() => {
        const getStudent = async()=>await getStudentById(myUserPath)
        getStudent().then(student=>setStudent(student))
    }, [])

    return (
        !student?
            <Spin/>
            :
            <Card
            style={{ width: '100%' }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>

    )
}

export default SpecificStudent
