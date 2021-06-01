import CodeinTable from './index';
import { coursesColumns,coursesData,graduatesColumns,graduatesData} from './mock'

export default {
    title: 'CodeinTable',
    component: CodeinTable
}

export const coursesTable = () => <CodeinTable getData={()=>{return coursesData}} columns={coursesColumns} />;
export const graduatesTable = () => <CodeinTable getData={()=>{return graduatesData}} columns={graduatesColumns} />;
// export const CodeinTable2 = () => <CodeinTable columns={graduatesColumns}/>;
