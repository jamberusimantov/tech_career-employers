import React,{useState} from 'react'

import { Button,Input,Modal } from 'antd';


//Table
import CodeinTable from '../../components/shared/CodeinTable'

import { Checkbox } from 'antd';
//Data for table from local data
import {coursesColumns,coursesData,graduatesColumns,graduatesData} from '../../components/shared/CodeinTable/mock'



function AdminPage() {

    
  const [isModalVisibleStudent, setIsModalVisibleStudent] = useState(false);
  const [isModalVisibleHr, setIsModalVisibleHr] = useState(false);

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









    function changeShowTable(e: { target: { checked: any; }; }) {
        console.log(`checked = ${e.target.checked}`);
      }
      

    return (

        <div>
        
<Button type="primary" onClick={showModalStudent}>
        רישום סטודנט
      </Button>
      <Modal title="רישום סטודנט" visible={isModalVisibleStudent} onOk={handleOkStudent} onCancel={handleCancelStudent}>
     <p>אימייל</p>
      <Input placeholder="אימייל סטודנט" />
      <Button>שליחה</Button>
      
        
      </Modal>

<Button type="primary" onClick={showModalHr}>
        רישום מגייס
      </Button>
      <Modal title="רישום מגייס" visible={isModalVisibleHr} onOk={handleOkHr} onCancel={handleCancelHr}>
     <p>אימייל</p>
      <Input placeholder="אימייל" />
      <Input placeholder="שם חברה" />
      <Button>שליחה</Button>
      
        
      </Modal>

            <Checkbox onChange={changeShowTable}>טבלת ליווי ובוגרים</Checkbox>
            <Checkbox onChange={changeShowTable}>טבלת משרות ומגייסות</Checkbox>
            <CodeinTable columns={coursesColumns} data={coursesData}/>
            <CodeinTable columns={graduatesColumns} data={graduatesData}/>
        </div>
    )
}

export default AdminPage
