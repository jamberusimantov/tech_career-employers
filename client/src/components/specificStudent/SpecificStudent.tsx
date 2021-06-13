import React, { useState, useEffect } from 'react'
import { Typography, Spin } from 'antd';
import { getStudentById } from '../../utils/drafts/student.utils'
import './specificStudent.css'
const { Title } = Typography;



const SpecificStudent = () => {
  let myUserPath = window.location.pathname.slice(13)
  const [student, setStudent] = useState({ "links": { github: '', facebook: '', linkedIn: '', personalSite: '' }, "about": '', "phone": '', "name": '', "profilePicture": '', "email": '', "courseName": '', "courseCompletionDate": '', "numberOfGraduates": '', "cycle": '', "isWorking": true, "company": '', "role": '', "isAuth": true, "specialty": '', "programmingLang": [] })

  useEffect(() => {
    if (student.email === '') {
      const getStudent = async () => await getStudentById(myUserPath)
      getStudent().then(student => setStudent(student))
    }
    console.log(student);
  }, [student])

  return (
    !student.profilePicture ?
      <Spin />
      :
      <div className='card-container'>
        <img src={student.profilePicture} alt="" />
        <Title level={1}>{student.name}</Title>
        <div>

          <div className='skills-class'>
            <Title className="title-class" level={2}>:Skills</Title>
            <Title className="title-class" level={5}>{student.programmingLang.join(', ')}</Title>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="about-container">
            <Title className="title-class" level={2}>:About</Title>
            <p className="about-class">{student.about}</p>
          </div>

          <div className="contact-container">
            <Title className="title-class" level={2}>:Contact Info</Title>
            <div>
              <div>
              <Title className="title-class" level={4}>Email: {student.email}</Title>
              <Title className="title-class" level={4}> Portfolio link: <a target="_blank" href={student.links.personalSite}>Click here</a></Title>
                
               
              </div>
              <a target="_blank" href={student.links.facebook}><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
              <a target="_blank" href={student.links.linkedIn}><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
              <a target="_blank" href={student.links.github}><i className="fa fa-github-square" aria-hidden="true"></i></a>
            </div>
            
          </div>
        </div>
      </div>


  )
}

export default SpecificStudent