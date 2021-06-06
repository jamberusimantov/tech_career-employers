import React, { useState,useEffect } from "react";

import { Button, Input, Modal,Checkbox } from "antd";

//Table
import CodeinTable from "../../components/shared/CodeinTable";

import service from '../../utils';

import './AdminPage.css'

import {getAllCourses } from './admin.service'



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
    dataIndex: 'age',
  },
  {
    title: 'שאל את המגייסת?',
    dataIndex: 'emailTo',
    render: (text: string) =>
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="mailto: abc@example.com">{text}</a>,
  },
  {
    title: 'הגישו קו"ח',
    dataIndex: 'name',
    // render: (text: string) => <a>{text}</a>,
  },
];


function AdminPage() {


  const [searchValueInTable, setSearchValueInTable] = useState('');


  const { login } = service

  const { registerUser } = login

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  
  const [hrEmail,setHrEmail]=useState('');
  const [companyName,setCompanyName]=useState('');

  const registerHr ={
    credentials:{
      email:hrEmail,
      company:companyName
    }
  }
  
  const [isModalVisibleStudent, setIsModalVisibleStudent] = useState(false);
  const [isModalVisibleHr, setIsModalVisibleHr] = useState(false);
  
  const [showCoursesTable, setShowCoursesTable] = useState(false);
  const [showGraduatesTable, setShowGraduatesTable] = useState(false);
  
  const showModalStudent = () => {
    setIsModalVisibleStudent(true);
  };
  
  const handleOkStudent = () => {
    setIsModalVisibleStudent(false);
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

  function sortByName(a: { courseCompletionDate: { toLowerCase: () => number; }; }, b: { courseCompletionDate: { toLowerCase: () => number; }; }) {
    return a.courseCompletionDate.toLowerCase() - b.courseCompletionDate.toLowerCase();
  }
  
  // function filterByName(value: any, record: { courseCompletionDate: string | any[]; }) {
  //   return record.courseCompletionDate.indexOf(value) !== -1;
  // }


  return (
    <div className="admin-page">
      <Input.Search
       placeholder="חפש"
       value={searchValueInTable}
       />



      <div className="modal-admin-page">




        <Button type="primary" onClick={showModalStudent}>
          רישום סטודנט
        </Button>
        <Modal
          title="רישום סטודנט"
          visible={isModalVisibleStudent}
          onOk={handleOkStudent}
          onCancel={handleCancelStudent}
        >
          <p>אימייל</p>
          <Input placeholder="אימייל סטודנט" />
          <Button>שליחה</Button>
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
          <CodeinTable columns={graduatesColumns}  />
        )}
      </div>
    </div>
  );
}

export default AdminPage;
