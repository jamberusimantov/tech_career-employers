import React, { useState,useEffect } from "react";

import { Button, Input, Modal,Checkbox } from "antd";

//Table
import CodeinTable from "../../components/shared/CodeinTable";

//Data for table from local data

import {getAllStudents} from '../../service/students.service'

// courseCompletionDate: "21/05"
// courseName: "Full Stack"
// cycle: "20/21"
// date: "2021-05-31T14:09:25.865Z"
// email: "Moshe@gmail.com"
// friends: []
// isActive: true
// isAuth: true
// isWorking: false
// name: "Moshe Yaso"
// numberOfGraduates: 23
// pictures: []
// programmingLang: (8) ["HTML", "CSS", "Java Script", "React", "Type Script", "Bootstrap", "MongoDB", "NodeJs"]
// role: "Student"
// specialty: "Java Script"

const columns = [
  {
    title: 'שם הקורס',
    dataIndex: 'courseName',
    key: 'courseName',
  },
  {
    title: 'מועד הסיום',
    dataIndex: 'courseCompletionDate',
    key: 'courseCompletionDate',
  },
  {
    title: 'מס בוגרים',
    dataIndex: 'numberOfGraduates',
    key: 'numberOfGraduates',
  },
  {
    title: 'מס מועסקים',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'מס מחפשי עבודה',
    dataIndex: 'isWorking',
    key: 'isWorking',
  },
  {
    title: 'סגירת השמות',
    dataIndex: 'role',
    key: 'role',
  },
];


function AdminPage() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dataStudent, setDataStudent] = useState([])
  
  
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
  
  const handleOkHr = () => {
    setIsModalVisibleHr(false);
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
  async function fetchData() {
    
    try {
      setLoading(true);
      await getAllStudents().then(res => {setDataStudent(res);console.log(res);
      })
      
    } catch (error) {
      console.log(error);
      
    } finally {
      setLoading(false);
    }
  }
  
  
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className="admin-page">
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
          onOk={handleOkHr}
          onCancel={handleCancelHr}
        >
          <p>אימייל</p>
          <Input placeholder="אימייל" />
          <Input placeholder="שם חברה" />
          <Button>שליחה</Button>
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
          <CodeinTable  columns={columns} dataSource={dataStudent} />
        )}
        {/* {!showGraduatesTable ? (
          " "
        ) : (
          <CodeinTable columns={graduatesColumns} data={graduatesData} />
        )} */}
      </div>
    </div>
  );
}

export default AdminPage;
