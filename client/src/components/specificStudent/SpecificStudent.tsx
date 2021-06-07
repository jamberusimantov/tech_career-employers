import React, { useState, useEffect } from 'react'
import { Typography, Spin } from 'antd';
import { getStudentById } from '../../utils/drafts/student.utils'
import './specificStudent.css'
const { Title } = Typography;



const SpecificStudent = () => {
  let myUserPath = window.location.pathname.slice(13)
  const [student, setStudent] = useState({ "phone": '', "name": '', "pictures": [{ path: '' }], "email": '', "courseName": '', "courseCompletionDate": '', "numberOfGraduates": '', "cycle": '', "isWorking": true, "company": '', "role": '', "isAuth": true, "specialty": '', "programmingLang": [] })

  useEffect(() => {
    const getStudent = async () => await getStudentById(myUserPath)
    getStudent().then(student => setStudent(student))
  }, [])

  return (
    !student ?
      <Spin />
      :

      <div className='card-container'>
          <img src={student.pictures[0].path} alt="" />
          <Title  level={1}>{student.name}</Title>
        <div>
  
        <div >
          <Title className="title-class" level={2}>{student.name} Skills</Title>
          <Title className="title-class" level={5}>{student.programmingLang.join(', ')}</Title>
        </div>
        </div>
       
        <div>
          <Title className="title-class" level={2}>About</Title>
          Full Stack web developer seeking a challenging role in a technological company.
          Over the last 2 years, I completed 2000 hours of theoretic and practical studies in programming including Nodejs OOP, API Using Express, HTML, CSS, Javascript, React, TypeScript, MongoDB.
          I am open-minded, dedicated to my work, responsible and enjoy working in a team.
          I am passionate about new technologies, and I am looking for an innovative environment where I can use my skills to contribute to the company’s success.
        </div>

      </div>


  )
}

export default SpecificStudent
