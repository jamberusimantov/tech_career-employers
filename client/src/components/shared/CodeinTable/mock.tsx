/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

interface CoursesDataType {
  key: React.Key;
  courses: Object;
  courseCompletionDate: Object;
  numberOfGraduates: number;
  cycle: string;
  isNoWorking: number;
  isWorking: number;
}

interface GraduatesDataType {
  key: React.Key,
  company: string,
  uploadedBy: string,
  passion: [string],
  uploadDate: Object,
  emailTo: string,
}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const studentNames = (



<Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        אלמיטו
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        שמואל
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        ישראל
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        חמודי
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        ספיר
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        משה
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        רוי
      </a>
    </Menu.Item>
  </Menu>

);


function numbersOfGraduates (text: string){
  
  return <Dropdown overlay={studentNames}>
  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
   {text} <DownOutlined />
  </a>
</Dropdown>

}

export const coursesColumns: any[] = [
  {
    title: 'שם הקורס',
    dataIndex: 'courses',
    filters: [
      {
        text: 'קורס פיתוח תוכנה',
        value: 'קורס פיתוח תוכנה',
      },
      {
        text: 'סייבר',
        value: 'סייבר',
      },
      {
        text: 'בודק תוכנה',
        value: 'בודק תוכנה',
      }, 
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // onFilter: (value: any, record: { name: string | any[]; }) => record.courses.indexOf(value) === 0,
  
  },
  {
   title: 'מועד סיום',
   dataIndex: 'courseCompletionDate',
  },
  {
    title: 'מס בוגרים',
    dataIndex: 'numberOfGraduates',
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
  
    render: numbersOfGraduates,
  },
  {
    title: 'מס מועסקים',
    dataIndex: 'cycle',
  },
  {
    title: 'מס מחפשי עבודה',
    dataIndex: 'isNoWorking',
  },
 {
   title: 'סגירת השמות',
   dataIndex: 'isWorking',
  },
];

export const coursesData: CoursesDataType[] = [
  {
    key: '1',
    courses: 'קורס פיתוח תוכנה',
    courseCompletionDate: Date(),
    numberOfGraduates: 5,
    cycle: 'ט"ה',
    isNoWorking: 5,
    isWorking: 55555555
  },
  {
    key: '2',
    courses: 'בדיקות תוכנה QA',
    courseCompletionDate: Date(),
    numberOfGraduates: 5,
    cycle: 'ק"ר',
    isNoWorking: 5,
    isWorking: 55555555
  },
  {
    key: '3',
    courses: 'סייבר',
    courseCompletionDate: Date(),
    numberOfGraduates: 5,
    cycle: 'ש"ח',
    isNoWorking: 5,
    isWorking: 55555555
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

export const graduatesData: GraduatesDataType[] = [
  {
    key: '4',
    company: 'Microsoft',
    uploadedBy: 'קרן',
    passion: ['Backend-End Development'],
    uploadDate: Date(),
    emailTo: 'send email link',
  },
  {
    key: '5',
    company: 'e-Bay',
    uploadedBy: 'נופר',
    passion: ['Backend-End Development'],
    uploadDate: Date(),
    emailTo: 'send email link',
  },
  {
    key: '6',
    company: 'Wix',
    uploadedBy: 'אדוה',
    passion: ['Front-End Development'],
    uploadDate: Date(),
    emailTo: 'send email link',
  },
  {
    key: '7',
    company: 'AT & T',
    uploadedBy: 'יוסי',
    passion: ['Front-End Development'],
    uploadDate: Date(),
    emailTo: 'send email link',
  },
  {
    key: '8',
    company: 'Amazon',
    uploadedBy: 'ניר',
    passion: ['Backend-End Development'],
    uploadDate: Date(),
    emailTo: 'send email link',
  },
];
