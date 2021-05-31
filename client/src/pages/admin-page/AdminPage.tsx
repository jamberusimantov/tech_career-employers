import React from 'react'


//Table
import CodeinTable from '../../components/shared/CodeinTable'

import { Checkbox } from 'antd';
//Data for table from local data
import {coursesColumns,coursesData,graduatesColumns,graduatesData} from '../../components/shared/CodeinTable/mock'



function AdminPage() {

    function changeShowTable(e: { target: { checked: any; }; }) {
        console.log(`checked = ${e.target.checked}`);
      }


    return (
        <div>
            <Checkbox onChange={changeShowTable}>טבלת ליווי ובוגרים</Checkbox>
            <Checkbox onChange={changeShowTable}>טבלת משרות ומגייסות</Checkbox>
            <CodeinTable columns={coursesColumns} data={coursesData}/>
            <CodeinTable columns={graduatesColumns} data={graduatesData}/>
        </div>
    )
}

export default AdminPage
