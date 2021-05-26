
import React from 'react'

//Table
import CodeinTable from '../../components/Shared/CodeinTable'

//Data for table from local data
import {coursesColumns,coursesData,graduatesColumns,graduatesData} from '../../components/Shared/CodeinTable/mock'

function AdminPage() {
    return (
        <div>
      
            <CodeinTable columns={coursesColumns} data={coursesData}/>
            <CodeinTable columns={graduatesColumns} data={graduatesData}/>
        </div>
    )
}

export default AdminPage



