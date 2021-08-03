import React, { useState, useEffect } from "react";
import {  } from 'antd';

import { Button, Input, Modal, Checkbox, Switch, Popconfirm } from "antd";

import CodeinTable from "../../components/shared/CodeinTable";

import service from "../../utils";

import { getAllCourses, getAllJobOffers
  // ,creatingCourse
 } from "../../service/admin.service";

import {
  updateJobOfferById,
  deleteJobOfferById,
} from "../../utils/drafts/jobOffer.utils";

import { useHistory } from "react-router-dom";

import NumberOfGraduates from "./number-of-graduates/NumberOfGraduates";
import { DeleteOutlined } from "@ant-design/icons";

import { tableColumnTextFilterConfig } from "./table-utils/tableUtils";
import "./style.css";

function AdminPage() {

  //courses columns
  const coursesColumns = [
    {
      title: "שם הקורס",
      dataIndex: "courseName",
      key: "courseName",
      width: 250,
      fixed: "left",
      render: (text: string) => text,
      ...tableColumnTextFilterConfig(),
      onFilter: (
        value: { toString: () => string },
        record: { courseName: { toString: () => string } }
      ) => {
        return record.courseName
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase());
      },
    },
    {
      title: "מועד הסיום",
      dataIndex: "courseCompletionDate",
      key: "courseCompletionDate",
    },
    {
      title: "מס בוגרים",
      render: renderNumberOfGraduates,
      key: "numberOfGraduates",

      defaultSortOrder: "descend",
      sorter: (
        a: { numberOfGraduates: number },
        b: { numberOfGraduates: number }
      ) => a.numberOfGraduates - b.numberOfGraduates,
    },
    {
      title: "מחזור",
      dataIndex: "cycle",
      key: "cycle",
    },
    {
      title: "מס מועסקים",
      dataIndex: "graduatesWorking",
      key: "graduatesWorking",
    },
    {
      title: "מס מחפשי עבודה",
      dataIndex: "graduatesNotWorking",
      key: "graduatesNotWorking",
      width: 120,
      fixed: "right",
    },
    {
      title: "סגירת השמות",
      dataIndex: "graduatesWorking",
      key: "graduatesWorking",
      width: 120,
      fixed: "right",
    },
  ];

  //jobOffers columns
  const jobOffersColumns: any[] = [
    {
      title: "חברה",
      dataIndex: "company",
      width: 120,
      fixed: "left",
      key: "company",

      ...tableColumnTextFilterConfig(),
      onFilter: (
        value: { toString: () => string },
        record: { company: { toString: () => string } }
      ) => {
        return record.company
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase());
      },
    },
    {
      title: "מגייסת",
      dataIndex: "uploadedBy",
      width: 120,
      key: "uploadedBy",
      render: (text: string) => text,
      ...tableColumnTextFilterConfig(),
      onFilter: (
        value: { toString: () => string },
        record: { uploadedBy: { toString: () => string } }
      ) => {
        return record.uploadedBy
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase());
      },
    },
    {
      title: "תפקיד",
      dataIndex: "position",
      width: 100,
      key: "position",
      render: (text: string) => text,
      ...tableColumnTextFilterConfig(),
      onFilter: (
        value: { toString: () => string },
        record: { position: { toString: () => string } }
      ) => {
        return record.position
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase());
      },
    },
    {
      title: "ת. פתיחת משרה",
      dataIndex: "uploadDate",
      width: 250,
      key: "uploadDate",
    },
    {
      title: "עיר",
      dataIndex: "location",
      width: 120,
      key: "location",
      render: (text: string) => text,
      ...tableColumnTextFilterConfig(),
      onFilter: (
        value: { toString: () => string },
        record: { location: { toString: () => string } }
      ) => {
        return record.location
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase());
      },
    },
    {
      title: "סטטוס",
      dataIndex: "status",
      width: 100,
      key: "status",
      render: (text: string) => text,
      ...tableColumnTextFilterConfig(),
      onFilter: (
        value: { toString: () => string },
        record: { status: { toString: () => string } }
      ) => {
        return record.status
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase());
      },
    },
    {
      title: "פרסום משרה",
      dataIndex: "isHidden",
      width: 100,
      key: "isHidden",
      render: (isHidden: boolean | undefined, row: any) => (
        <Switch
          onChange={(e) => showJobOffer(e, row._id)}
          defaultChecked={isHidden}
          checkedChildren="מוסתר"
          unCheckedChildren="גלוי"
        />
      ),
    },
    {
      title: 'הגישו קו"ח',
      dataIndex: "numOfPeopleApplied",
      key: "numOfPeopleApplied",
      width: 120,
    },
    {
      title: "שאל את המגייסת?",
      dataIndex: "emailHr",
      width: 120,
      // fixed: "left",
      fixed: "right",
      key: "emailHr",
      render: (text: string) => <a href="mailto: abc@example.com">{text}</a>,
    },
    {
      title: "מחיקה",
      key: "delete",
      width: 100,
      fixed: "right",
      render: (text: any, row: any) => (
        <Popconfirm title="למחוק?" onConfirm={() => deleteJobOffer(row._id)}>
          <DeleteOutlined />
        </Popconfirm>
      ),
    },
  ];

  const { login } = service;
  const {
    registerUser,
    registerStudent,
    getUserUseToken,
    registerAdmin,
  } = login;

  const [jobOfferReload, setJobOfferReload] = useState(0);

  const [courseName,setCourseName]=useState("");
  const [courseCycle,setCourseCycle]=useState("");

  const [studentEmail, setStudentEmail] = useState("");

  const [hrEmail, setHrEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminConfirmPassword, setAdminConfirmPassword] = useState("");

  const [role, setRole] = useState(" ");
  const history = useHistory();

  // const creatingCourseByAdmin = {
  //   course:{
  //     courseName:courseName,
  //     courseCycle:courseCycle
  //   }
  // }


  const registerStudentByAdmin = {
    credentials: {
      email: studentEmail,
    },
  };

  const registerHrByAdmin = {
    credentials: {
      email: hrEmail,
      company: companyName,
    },
  };
  const registerAdminByAdmin = {
    credentials: {
      email: adminEmail,
      password: adminPassword,
      confirmPassword: adminConfirmPassword,
    },
  };

  const [isModalVisibleStudent, setIsModalVisibleStudent] = useState(false);
  const [isModalVisibleCourseOpening, setIsModalVisibleCourseOpening] = useState(false);
  const [isModalVisibleHr, setIsModalVisibleHr] = useState(false);
  const [isModalVisibleAdmin, setIsModalVisibleAdmin] = useState(false);

  const [showCoursesTable, setShowCoursesTable] = useState(false);
  const [showJobOffersTable, setShowJobOffersTable] = useState(false);

  const showModalCourseOpening = ()=>{
    setIsModalVisibleCourseOpening(true)
  }

  const handleCancelCourseOpening = () => {
    setIsModalVisibleCourseOpening(false);
  };



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

  const showModalAdmin = () => {
    setIsModalVisibleAdmin(true);
  };
  const handleCancelAdmin = () => {
    setIsModalVisibleAdmin(false);
  };

  async function showJobOffer(checked: any, rowId: any) {
    await updateJobOfferById({ isHidden: checked }, rowId);
  }

  async function deleteJobOffer(rowId: any) {
    await deleteJobOfferById(rowId);
    setJobOfferReload(jobOfferReload + 1);
  }

  function hideOrShowCoursesTable(e: { target: { checked: any } }) {
    setShowCoursesTable(!showCoursesTable);
  }

  function hideOrShowJobOffersTable(e: { target: { checked: any } }) {
    setShowJobOffersTable(!showJobOffersTable);
  }
  const onRegisterModalOkCourseOpening = async () => {
    setIsModalVisibleCourseOpening(false);

    // await creatingCourse(creatingCourseByAdmin.course)
    // await registerStudent(registerStudentByAdmin.credentials, "student");
  };

  const onRegisterModalOkStudent = async () => {
    setIsModalVisibleStudent(false);
    await registerStudent(registerStudentByAdmin.credentials, "student");
  };
  const onRegisterModalOkHr = async () => {
    setIsModalVisibleHr(false);
    await registerUser(registerHrByAdmin.credentials, "hr");
  };

  const onRegisterModalOkAdmin = async () => {
    setIsModalVisibleAdmin(false);
    await registerAdmin(registerAdminByAdmin.credentials, "admin");
  };

  function renderNumberOfGraduates(row: any) {
    return (
      <NumberOfGraduates
        courseId={row._id}
        numberOfGraduates={row.numberOfGraduates}
      />
    );
  }

  useEffect(() => {
    const getUserData = async () => {
      const user = await getUserUseToken(localStorage.getItem("token") || "{}");
      const userRole = (user.data || { role: undefined }).role;
      setRole(userRole);
      if (!role) {
        history.push("/");
      }
    };
    getUserData();
  }, [role,getUserUseToken,history]);

  
  return (
    <>
      {role === "Admin" ? (
        <div className="admin-page">
          <div className="admin-page-actions">
         
         
            <Button type="primary" onClick={showModalCourseOpening}>
            פתיחת קורס
            </Button>
            <Button type="primary" onClick={showModalStudent}>
              רישום סטודנט
            </Button>

            <Button type="primary" onClick={showModalHr}>
              רישום מגייס
            </Button>

            <Button type="primary" onClick={showModalAdmin}>
              רישום מנהל
            </Button>
            <Checkbox onChange={hideOrShowCoursesTable}>
              טבלת ליווי ובוגרים
            </Checkbox>
            <Checkbox onChange={hideOrShowJobOffersTable}>
              טבלת משרות ומגייסות
            </Checkbox>
          </div>

          <div className="admin-page-table-courses">
            {showCoursesTable ? (
              " "
            ) : (
              <>
                <CodeinTable
                  title={"טבלת בוגרים וקורסים"}
                  scroll={{ x: 1300 }}
                  columns={coursesColumns}
                  getData={getAllCourses}
                />
              </>
            )}
          </div>

          <div className="admin-page-table-job-offers">
            {showJobOffersTable ? (
              " "
            ) : (
              <>
                <CodeinTable
                  title={"טבלת משרות ומגייסות"}
                  scroll={{ x: 1500, y: 300 }}
                  columns={jobOffersColumns}
                  getData={getAllJobOffers}
                  tableReload={jobOfferReload}
                />
              </>
            )}
          </div>

          <Modal
            title="רישום מגייס"
            visible={isModalVisibleHr}
            onOk={onRegisterModalOkHr}
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

          <Modal
            title="רישום מנהל"
            visible={isModalVisibleAdmin}
            onOk={onRegisterModalOkAdmin}
            onCancel={handleCancelAdmin}
          >
            <p>אימייל</p>
            <Input
              onChange={(e) => {
                setAdminEmail(e.target.value);
              }}
              placeholder="אימייל מנהל"
            />
            <p>סיסמה</p>

            <Input
              onChange={(e) => {
                setAdminPassword(e.target.value);
              }}
              placeholder="סיסמה"
            />
            <p>אימות סיסמה</p>
            <Input
              onChange={(e) => {
                setAdminConfirmPassword(e.target.value);
              }}
              placeholder="אימות סיסמה"
            />
          </Modal>

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

          <Modal
            title="פתיחת קורס"
            visible={isModalVisibleCourseOpening}
            onOk={onRegisterModalOkCourseOpening}
            onCancel={handleCancelCourseOpening}
          >
            <p>שם קורס</p>
            <Input
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
              placeholder="שם קורס"
            />
            <p>מחזור</p>
             <Input
              onChange={(e) => {
                setCourseCycle(e.target.value);
              }}
              placeholder="מחזור"
            />
          </Modal>


        </div>
      ) : (
        " "
      )}
    </>
  );
}

export default AdminPage;
