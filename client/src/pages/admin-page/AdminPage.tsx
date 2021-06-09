import React, { useState, useEffect } from "react";

import { Button, Input, Modal, Checkbox } from "antd";

//Table
import CodeinTable from "../../components/shared/CodeinTable";

import service from "../../utils";

import "./AdminPage.css";

import { getAllCourses, getAllJobOffers } from "../../service/admin.service";

import NumberOfGraduates from "./number-of-graduates/NumberOfGraduates";

import {tableColumnTextFilterConfig} from './table-utils/tableUtils';

//להוסיף למודל שם פרטי מגייסת
//להוסיף תפקיד שזה שדה position
//להוסיף שדה של אימייל של המגייסת שהעלתה את המשרה

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

function AdminPage() {
  const coursesColumns = [
    {
      title: "שם הקורס",
      dataIndex: "courseName",
      key: "courseName",
      width: 250,
      fixed: 'left',
      render: (text: string) => text,
      ...tableColumnTextFilterConfig(),
      onFilter: (value: { toString: () => string; }, record: { courseName: { toString: () => string; }; }) => {
        return record.courseName
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase())
      },
    },
    {
      title: "מועד הסיום",
      dataIndex: "courseCompletionDate",
      key: "courseCompletionDate",
      width: 200,
      fixed: 'left',
     
    },
    {
      title: "מס בוגרים",
      render: renderNumberOfGraduates,
      key: "numberOfGraduates",
      width: 120,
      fixed: 'left',
    },
    {
      title: "מס מועסקים",
      dataIndex: "graduatesWorking",
      key: "graduatesWorking",
      width: 120,
      fixed: 'left',
    },
    {
      title: "מס מחפשי עבודה",
      dataIndex: "graduatesNotWorking",
      key: "graduatesNotWorking",
      width: 120,
      fixed: 'left',
    },
    {
      title: "סגירת השמות",
      dataIndex: "graduatesWorking",
      key: "graduatesWorking",
      width: 120,
      fixed: 'right',
    },
  ];

  const graduatesColumns: any[] = [
    {
      title: "חברה",
      dataIndex: "company",
      width: 120,
      fixed: 'right',
      key: "company",

      render: (text: string) => text,
      ...tableColumnTextFilterConfig(),
      onFilter: (value: { toString: () => string; }, record: { company: { toString: () => string; }; }) => {
        return record.company
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase())
      },
    
    },
    {
      title: "מגייסת",
      dataIndex: "uploadedBy",
      width: 120,
      fixed: 'right',
      key: "uploadedBy",

      render: (text: string) => text,
      ...tableColumnTextFilterConfig(),
      onFilter: (value: { toString: () => string; }, record: { uploadedBy: { toString: () => string; }; }) => {
        return record.uploadedBy
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase())
      },
    },
    {
      title: "תפקיד",
      dataIndex: "position",
      width: 100,
      fixed: 'right',
      key: "position",
      render: (text: string) => text,
      ...tableColumnTextFilterConfig(),
      onFilter: (value: { toString: () => string; }, record: { position: { toString: () => string; }; }) => {
        return record.position
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase())
      },
    },
    {
      title: "ת. פתיחת משרה",
      dataIndex: "uploadDate",
      width: 250,
      fixed: 'left',
      key: "uploadDate",
    },
    {
      title: "עיר",
      dataIndex: "location",
      width: 120,
      fixed: 'left',

      key: "location",
      render: (text: string) => text,
      ...tableColumnTextFilterConfig(),
      onFilter: (value: { toString: () => string; }, record: { location: { toString: () => string; }; }) => {
        return record.location
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase())
      },
    },
    {
      title: "סטטוס",
      dataIndex: "status",
      width: 100,
      fixed: 'right',
      key: "status",
      render: (text: string) => text,
      ...tableColumnTextFilterConfig(),
      onFilter: (value: { toString: () => string; }, record: { status: { toString: () => string; }; }) => {
        return record.status
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase())
      },
    },
    {
      title: "שאל את המגייסת?",
      dataIndex: "emailHr",
      width: 150,
      fixed: 'right',
      key: "emailHr",
      render: (text: string) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="mailto: abc@example.com">{text}</a>
      ),
    },
    {
      title: 'הגישו קו"ח',
      dataIndex: "numOfPeopleApplied",
      key: "numOfPeopleApplied",
      fixed:'left'
    },
  ];

  const { login } = service;

  const { registerUser, registerStudent,getUserUseToken } = login;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const [hrEmail, setHrEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
   const [role,setRole] = useState("")
  const registerHr = {
    credentials: {
      email: hrEmail,
      company: companyName,
    },
  };
  const registerStudentByAdmin = {
    credentials: {
      email: studentEmail,
    },
  };
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

  const onRegisterModalOk = async () => {
    setIsModalVisibleHr(false);
    await registerUser(registerHr.credentials, "hr");
    console.log(registerHr.credentials);
  };

  const onRegisterModalOkStudent = async () => {
    setIsModalVisibleStudent(false);
    console.log(studentEmail);
    await registerStudent(registerStudentByAdmin.credentials, "student");
  };

  function renderNumberOfGraduates(course:any) {
    return (
      <NumberOfGraduates
        courseId={course._id}
        numberOfGraduates={course.numberOfGraduates}
      />
    );
  }

  useEffect(() => {
const getUserData= async () => {
  console.log(localStorage.getItem('token' ));
  
  
  const user= await getUserUseToken(localStorage.getItem('token' ) || '{}');  
  const userRole =user.data.role 
  setRole(userRole)
    // setMessage('400')

  // if('{}'){
  // }else{
  //   const userRole = user.data.role;
  // }

} 
getUserData()
  },[getUserUseToken])
  return (



    <>
{role === 'Admin' ?


<div className="admin-page">
      
<div className="modal_checkbox">
  <Checkbox onChange={changeShowCoursesTable}>
    טבלת ליווי ובוגרים
  </Checkbox>
  <Checkbox onChange={changeShowGraduatesTable}>
    טבלת משרות ומגייסות
  </Checkbox>

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
    <Input
      onChange={(e) => {
        setStudentEmail(e.target.value);
      }}
      placeholder="אימייל סטודנט"
      />
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
    <Input
      onChange={(e) => {
        setHrEmail(e.target.value);
      }}
      placeholder="אימייל"
      />
    <p>שם חברה</p>
    <Input
      onChange={(e) => {
        setCompanyName(e.target.value);
      }}
      placeholder="שם חברה"
      />
  </Modal>
  </div>

<div className="admin-page-table">


  {!showCoursesTable ? (
    " "
    ) : (
      <>
      <h1> טבלת בוגרים וקורסים </h1>
      <CodeinTable columns={coursesColumns} getData={getAllCourses} />
      </>
      )}
  {!showGraduatesTable ? (
    " "
    ) : (
      <>
      <h1> טבלת משרות ומגייסות </h1>
      <CodeinTable size="middle"
      scroll={{ x: 'calc(700px + 50%)', y: 240 }} columns={graduatesColumns} getData={getAllJobOffers} />
      </>
      )}
</div>
</div>

:

 null
}

  </>
  );
}

export default AdminPage;