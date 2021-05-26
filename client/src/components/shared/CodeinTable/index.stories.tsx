import CodeinTable from './index';
import {coursesColumns,coursesData} from '../CodeinTable/mock'

export default {
    title:'CodeinTable',
    component: CodeinTable
}

export const Default = ()=><CodeinTable columns={coursesColumns} data={coursesData}/> ;