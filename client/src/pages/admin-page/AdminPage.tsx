import React, { useState } from "react";

import { Button, Input, Modal,Checkbox } from "antd";

//Table
import CodeinTable from "../../components/shared/CodeinTable";


import {getAllCourses ,getStudentById} from './admin.service'



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


function AdminPage() {


  
  
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
          <CodeinTable  columns={columns} getData={getAllCourses} />
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
