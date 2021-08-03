import React, { useState, useEffect } from 'react'
import { Typography, Spin } from 'antd';
import { getStudentById, getCV } from '../../utils/drafts/student.utils'
import './specificStudent.css'
import { IUser } from '../../pages/Personal-page/utils.personal';
import {
  GithubOutlined, LinkedinOutlined, FacebookOutlined, HomeOutlined, MailOutlined, FormOutlined
} from "@ant-design/icons";
const { Title } = Typography;

const SpecificStudent = () => {
  let myUserPath = window.location.pathname.slice(13)
  const [student, setStudent] = useState<IUser>()

  // download file handler
  const fetchFile = async (e: any) => {
    e.preventDefault();
    if (!student?._id) return;
    try {
      const res = await getCV(student._id);
      if (res?.error) throw res.error.response.data.message;
      
      const link = document.createElement('a');
      link.href = res.data?.cv.base64;
      link.download = `${res.data.cv.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      alert(error)
      console.error(error);
    }
  }

  useEffect(() => {
    if (!student?._id) {
      const getStudent = async () => {
        const user = await getStudentById(myUserPath)
        setStudent(user)
      }
      getStudent();
    }
    // console.log(student);
  }, [student,myUserPath])

  if (!student?.profilePicture) return <Spin />;


  return (<div className='card-container'>
    <div className='paper'>

      <div>
        <img className="card-container-img" src={student.profilePicture} alt="" />
        <Title level={1}>{student.name}</Title>
      </div>

      <div className='skills-class'>
        <Title className="title-class" level={2}>:Skills</Title>
        <Title className="title-class" level={5}>{React.Children.toArray(
          student.programmingLang.map(lang => <span className='icon-Btn'>{lang}</span>))}</Title>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="about-container">
          <Title className="title-class" level={2}>:About</Title>
          <p className="about-class">{student.about}</p>
        </div>
        <div className="contact-container">
          <Title className="title-class" level={2}>:Contact Info</Title>
          <div className="contact-links">
            <a
              target="_blank"
              rel="noreferrer"
              href={`mailto: ${student.email}`}
              className='mail'
            ><MailOutlined /></a>
            <a
              target="_blank"
              rel="noreferrer"
              href={student.links.personalSite}
              className='personalSite'
            ><HomeOutlined /></a>
            <a
              target="_blank"
              rel="noreferrer"
              href={student.links.github}
              className='github'
            ><GithubOutlined /></a>
            <a
              target="_blank"
              rel="noreferrer"
              href={student.links.linkedIn}
              className='linkedIn'
            ><LinkedinOutlined /></a>
            <a
              target="_blank"
              rel="noreferrer"
              href={student.links.facebook}
              className='facebook'
            ><FacebookOutlined /></a>
            <a
              target="_blank"
              href='/'
              rel="noreferrer"
              style={{ color: '#333' }}
              onClick={fetchFile}
            ><FormOutlined /></a>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default SpecificStudent