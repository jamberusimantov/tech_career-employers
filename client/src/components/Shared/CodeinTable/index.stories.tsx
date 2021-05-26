import CodeinTable from './index';


import {coursesColumns,coursesData} from './mock'


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title:'CodeinTable',
    component: CodeinTable
}

export const Default = ()=><CodeinTable columns={coursesColumns} data={coursesData}/> ;