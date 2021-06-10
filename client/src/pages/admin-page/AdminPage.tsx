import React, { useState, useEffect } from "react";

import { Button, Input, Modal, Checkbox, Switch } from "antd";

import CodeinTable from "../../components/shared/CodeinTable";

import service from "../../utils";

import { getAllCourses, getAllJobOffers } from "../../service/admin.service";

import { useHistory } from "react-router-dom";

import NumberOfGraduates from "./number-of-graduates/NumberOfGraduates";

import { tableColumnTextFilterConfig } from "./table-utils/tableUtils";
import "./AdminPage.css";

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
      // width: 200,
    },
    {
      title: "מס בוגרים",
      render: renderNumberOfGraduates,
      key: "numberOfGraduates",
      // width: 120,
      defaultSortOrder: "descend",
      sorter: (
        a: { numberOfGraduates: number },
        b: { numberOfGraduates: number }
      ) => a.numberOfGraduates - b.numberOfGraduates,
    },
    {
      title: "מס מועסקים",
      dataIndex: "graduatesWorking",
      key: "graduatesWorking",
      // width: 120,
      // fixed: 'left',
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
      // fixed: 'left',
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
      // fixed: 'left',
      key: "isHidden",
      render: (e: boolean | undefined) => (
        <Switch
          onChange={showJobOffer}
          defaultChecked={e}
          checkedChildren="גלוי"
          unCheckedChildren="מוסתר"
        />
      ),
    },
    {
      title: "שאל את המגייסת?",
      dataIndex: "emailHr",
      width: 150,
      // fixed: 'left',
      key: "emailHr",
      render: (text: string) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="mailto: abc@example.com">{text}</a>
      ),
    },
    {
      title: 'הגישו קו"ח',
      dataIndex: "numOfPeopleApplied",
      key: "numOfPeopleApplied",
      width: 150,
      fixed: "right",
    },
  ];

  const { login } = service;
  const {
    registerUser,
    registerStudent,
    getUserUseToken,
    registerAdmin,
  } = login;

  const [studentEmail, setStudentEmail] = useState("");

  const [hrEmail, setHrEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminConfirmPassword, setAdminConfirmPassword] = useState("");

  const [role, setRole] = useState(" ");
  const history = useHistory();

  const registerAdminByAdmin = {
    credentials: {
      email: adminEmail,
      password: adminPassword,
      confirmPassword: adminConfirmPassword,
    },
  };

  const registerHrByAdmin = {
    credentials: {
      email: hrEmail,
      company: companyName,
    },
  };
  const registerStudentByAdmin = {
    credentials: {
      email: studentEmail,
    },
  };

  const [isModalVisibleStudent, setIsModalVisibleStudent] = useState(false);
  const [isModalVisibleHr, setIsModalVisibleHr] = useState(false);
  const [isModalVisibleAdmin, setIsModalVisibleAdmin] = useState(false);

  const [showCoursesTable, setShowCoursesTable] = useState(false);
  const [showJobOffersTable, setShowGraduatesTable] = useState(false);

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

  function showJobOffer(checked: any) {
    console.log(`switch to ${checked}`);
  }

  function changeShowCoursesTable(e: { target: { checked: any } }) {
    setShowCoursesTable(!showCoursesTable);
  }

  function changeShowJobOffersTable(e: { target: { checked: any } }) {
    setShowGraduatesTable(!showJobOffersTable);
  }

  const onRegisterModalOkStudent = async () => {
    setIsModalVisibleStudent(false);
    console.log(studentEmail);
    await registerStudent(registerStudentByAdmin.credentials, "student");
  };

  const onRegisterModalOkAdmin = async () => {
    setIsModalVisibleAdmin(false);
    await registerAdmin(registerAdminByAdmin.credentials, "admin");
  };

  const onRegisterModalOkHr = async () => {
    setIsModalVisibleHr(false);
    await registerUser(registerHrByAdmin.credentials, "hr");
    console.log(registerHrByAdmin.credentials);
  };

  function renderNumberOfGraduates(course: any) {
    return (
      <NumberOfGraduates
        courseId={course._id}
        numberOfGraduates={course.numberOfGraduates}
      />
    );
  }

  useEffect(() => {
    const getUserData = async () => {
      const user = await getUserUseToken(localStorage.getItem("token") || "{}");
      console.log(user);
      const userRole = (user.data || { role: undefined }).role;

      setRole(userRole);

      if (!role) {
        history.push("/");
      }
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);
  return (
    <>
      {role === "Admin" ? (
        <div className="admin-page">
          <div className="admin-page-actions">
            <Checkbox onChange={changeShowCoursesTable}>
              טבלת ליווי ובוגרים
            </Checkbox>
            <Checkbox onChange={changeShowJobOffersTable}>
              טבלת משרות ומגייסות
            </Checkbox>

            <Button type="primary" onClick={showModalStudent}>
              רישום סטודנט
            </Button>

            <Button type="primary" onClick={showModalHr}>
              רישום מגייס
            </Button>

            <Button type="primary" onClick={showModalAdmin}>
              רישום מנהל
            </Button>
          </div>

          <div className="admin-page-table-courses">
            {!showCoursesTable ? (
              " "
            ) : (
              <>
                <h1> טבלת בוגרים וקורסים </h1>
                <CodeinTable
                  scroll={{ x: 1300 }}
                  columns={coursesColumns}
                  getData={getAllCourses}
                />
              </>
            )}
            <div/>

            <div className="admin-page-table-job-offers">
              {!showJobOffersTable ? (
                " "
              ) : (
                <>
                  <h1> טבלת משרות ומגייסות </h1>
                  <CodeinTable
                    scroll={{ x: 1500, y: 300 }}
                    columns={jobOffersColumns}
                    getData={getAllJobOffers}
                  />
                </>
              )}
            </div>
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
        </div>
      ) : (
        " "
      )}
    </>
  );
}

export default AdminPage;
