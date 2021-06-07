import React, { useState,useEffect } from "react";

import { Button, Input, Modal,Checkbox } from "antd";

//Table
import CodeinTable from "../../components/shared/CodeinTable";

import service from '../../utils';

import './AdminPage.css'

import {getAllCourses,getAllJobOffers } from './admin.service'

import {getStudent} from '../../utils/drafts/student.utils'


const coursesColumns = [
  {
    title: 'שם הקורס',
    dataIndex: 'courseName',
    key: 'courseName',
    filters: [
      {
        text: 'Full-Stack',
        value: 'Full-Stack',
      },
      {
        text: 'QA',
        value: 'QA',
      },
      {
        text: 'Cyber',
        value: 'Cyber',
      },
    ],
    onFilter: (value: any, record: { courseName: string | any[]; }) => record.courseName.indexOf(value) === 0,
    // sorter: (a: { name: string | any[]; }, b: { name: string | any[]; }) => a.name.length - b.name.length,
    sortDirections: ['descend'],  },
  {
    title: 'מועד הסיום',
    dataIndex: 'courseCompletionDate',
    key: 'courseCompletionDate',
    // sorter:  sortByName,
		// onFilter: filterByName,
  },
  {
    title: 'מס בוגרים',
    dataIndex: 'numberOfGraduates',
    key: 'numberOfGraduates',

  },
  {
    title: 'מס מועסקים',
    dataIndex: 'graduatesWorking',
    key: 'graduatesWorking',
  },
  {
    title: 'מס מחפשי עבודה',
    dataIndex: 'graduatesNotWorking',
    key: 'graduatesNotWorking',
  },
  {
    title: 'סגירת השמות',
    dataIndex: 'graduatesWorking',
    key: 'graduatesWorking',
  },
];

// "numOfPeopleApplied": 0,
// "numOfViews": 0,
// "isHidden": false,
// "status": "OPEN",
// "_id": "60b7cffe4d638323000e7228",
// "uploadedBy": "jamber@google.com",
// "finalDateToApply": "2021-06-30T10:00:00.000Z",
// "company": "google",
// "location": "tel aviv",
// "jobDescription": "code++",
// "workRequirements": "ambition",
// "minYearsOfExperience": "0",
// "notes": "promise to robust you :)",
// "uploadDate": "2021-06-02T18:37:50.293Z",
// "__v": 0


export const graduatesColumns: any[] = [
  {
    title: 'חברה',
    dataIndex: 'company',
  },
  {
    title: 'מגייסת',
    dataIndex: 'uploadedBy',
  },
  {
    title: 'תפקיד',
    dataIndex: 'passion',
  },
  {
    title: 'ת. פתיחת משרה',
    dataIndex: 'uploadDate',
  },
  {
    title: 'סטטוס',
    dataIndex: 'status',
  },
  {
    title: 'שאל את המגייסת?',
    dataIndex: 'uploadedBy',
    render: (text: string) =>
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="mailto: abc@example.com">{text}</a>,
  },
  {
    title: 'הגישו קו"ח',
    dataIndex: 'numOfPeopleApplied',
    // render: (text: string) => <a>{text}</a>,
  },
];


function AdminPage() {




  const { login } = service

  const { registerUser,registerStudent } = login

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  
  const [hrEmail,setHrEmail]=useState('');
  const [companyName,setCompanyName]=useState('');
  const [studentEmail,setStudentEmail]=useState('');

  const registerHr ={
    credentials:{
      email:hrEmail,
      company:companyName
    }
  }
  const registerStudentByAdmin ={
    credentials:{
      email:studentEmail
    }
  }
  const [isModalVisibleStudent, setIsModalVisibleStudent] = useState(false);
  const [isModalVisibleHr, setIsModalVisibleHr] = useState(false);
  
  const [showCoursesTable, setShowCoursesTable] = useState(false);
  const [showGraduatesTable, setShowGraduatesTable] = useState(false);
  
  const showModalStudent = () => {
    setIsModalVisibleStudent(true);
  };
  
  const handleCancelStudent = () => {
    setIsModalVisibleStudent(false);
  };
  
  const showModalHr = () => {
    setIsModalVisibleHr(true);
  };
  
  
  const handleCancelHr = () => {
    setIsModalVisibleHr(false);
  };
  
  function changeShowCoursesTable(e: { target: { checked: any } }) {
    setShowCoursesTable(!showCoursesTable);
  }
  
  function changeShowGraduatesTable(e: { target: { checked: any } }) {
    setShowGraduatesTable(!showGraduatesTable);
  }
  
  const onRegisterModalOk=async () => {
    
    setIsModalVisibleHr(false);
   await registerUser(registerHr.credentials,'hr');
    console.log(registerHr.credentials);
  }

const onRegisterModalOkStudent= async ()=>{
  setIsModalVisibleStudent(false);
  console.log(studentEmail);
  await registerStudent(registerStudentByAdmin.credentials,'student')
  
}




  return (
    <div className="admin-page">
  

      <div className="modal-admin-page">




        <Button type="primary" onClick={showModalStudent}>
          רישום סטודנט
        </Button>
        <Modal
          title="רישום סטודנט"
          visible={isModalVisibleStudent}
          onOk={onRegisterModalOkStudent}
          onCancel={handleCancelStudent}
        >
          <p>אימייל</p>
          <Input onChange={(e)=>{setStudentEmail(e.target.value)}} placeholder="אימייל סטודנט" />
        </Modal>

        <Button type="primary" onClick={showModalHr}>
          רישום מגייס
        </Button>
        <Modal
          title="רישום מגייס"
          visible={isModalVisibleHr}
          onOk={onRegisterModalOk}
          onCancel={handleCancelHr}
        >
          <p>אימייל</p>
          <Input onChange={(e)=>{setHrEmail(e.target.value)}} placeholder="אימייל" />
          <p>שם חברה</p>
          <Input onChange={(e)=>{setCompanyName(e.target.value)}} placeholder="שם חברה" />
        </Modal>
      </div>

      <div className="checkbox">
        <Checkbox onChange={changeShowCoursesTable}>
          טבלת ליווי ובוגרים
        </Checkbox>
        <Checkbox onChange={changeShowGraduatesTable}>
          טבלת משרות ומגייסות
        </Checkbox>
      </div>
      <div className="admin-page-table">
        {!showCoursesTable ? (
          " "
        ) : (
          <CodeinTable columns={coursesColumns} getData={getAllCourses} />
        )}
        {!showGraduatesTable ? (
          " "
        ) : (
          <CodeinTable columns={graduatesColumns} getData={getAllJobOffers}  />
        )}
      </div>
    </div>
  );
}

export default AdminPage;
