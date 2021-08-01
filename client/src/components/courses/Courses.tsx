import React, { useState } from "react";
import {
  FcComboChart,
  FcFinePrint,
  FcGlobe,
  FcCommandLine,
  FcCloth,
  FcMindMap,
  FcMultipleDevices,
  FcEnteringHeavenAlive,
  FcAcceptDatabase,
} from "react-icons/fc";
import { Popover, Modal, Button, Tooltip } from "antd";

import {
  fullStackDescription,
  qaDescription,
  devNetDescription,
  socAnalystDescription,
  salesforceImplementsDescription,
  dataAnalystDescription,
  dataScientistDescription,
  cPluslanguageDescription as cPlusDescription,
  cyberSecurityDescription,
} from "./CoursesDescription";

import "./Courses.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Courses() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="coursesContainer">
      <div className="coursesTitleDiv">
        <h1>הקורסים שלנו</h1>
      </div>
      <div className="coursesDiv">
        <div className="course">
          <Modal
            title="Full Stack Web Development"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className="courseDescription">

              <ul className="reset-style custom-style-base custom-style-hover-type-arrow custom-style-hover-animate cursor-pointer">
                <h3 className="courseStructure">מבנה הקורס</h3>
                <li>
                  800 שעות לימוד אקדמיות, מתוכן 50% תרגול מעשי והשלמת פרוייקטי
                  לייב אשר פותחו במיוחד לטובת הקורס (הלמידה תהיה פיזית בכיתה
                  בקמפוס טק-קריירה בלוד / בקפסולות / מרחוק – בהתאם להנחיות
                  הממשלה בכל זמן נתון).
                </li>
                <li>8 חודשים, 4 ימי לימוד מלאים בשבוע</li>
                <li>
                  לימודים מסביב לשעון: שילוב בין לימודים עם מרצה בכיתה, למידה
                  עצמית אונליין, תרגול עצמי ובקבוצות
                </li>
                <li>העשרות והרצאות אורח ע"י אנשי מקצוע העובדים בתחום</li>
                <li>
                  סיורים לימודיים בחברות הייטק (בהתאם לנהלי הקורונה במועד
                  הרלווטני) תכנית מקיפה להכנה לקריירה: כתיבת קו"ח מקצועיים
                  באנגלית, כלים לחיפוש עבודה, הכנה לראיונות כולל סימולציות ע"י
                  מראיינים מהתעשייה
                </li>
                <li>
                  תכנית מנטורים המלווים באופן אישי כל סטודנט עד להשתלבות מלאה
                  בעבודה
                </li>
              </ul>
              <ul>
                <h3 className="courseStructure">תכנים עיקריים</h3>
                <li>Introduction to computer science</li>
                <li>Introduction to computers and web world</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Algorithms & Software Design</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js/ Nest</li>
                <li>Mongo DB</li>
                <li>NoSql</li>
                <li>Git/GitHub</li>
                <li>Introduction to cloud</li>
                <li>CodeReview, Testing and debugging</li>
              </ul>
            </div>
          </Modal>
          <span onClick={showModal}>
            <Tooltip title="לחץ לצפיה בפרטי הקורס">
              <FcMultipleDevices size={70} />
            </Tooltip>
            ,
          </span>

          <h3> Full Stack Web Development</h3>
        </div>
        <div className="course">
          <Popover content={qaDescription} title="QA">
            <FcFinePrint size={70} />
          </Popover>

          <h3>QA – Manual and Automation</h3>
        </div>
        <Popover content={devNetDescription} title="CCNA, CCNP, DevNet">
          <div className="course">
            <FcGlobe size={70} />

            <h3>CCNA, CCNP, DevNet</h3>
          </div>
        </Popover>
        <div className="course">
          <Popover content={socAnalystDescription} title="Soc Analyst">
            <FcMindMap size={70} />
          </Popover>
          <h3> Soc Analyst</h3>
        </div>
        <div className="course">
          <Popover
            title="Soc Analyst"
            content={salesforceImplementsDescription}
          >
            <FcEnteringHeavenAlive size={70} />
          </Popover>
          <h3> Salesforce Implements</h3>
        </div>
        <div className="course">
          <Popover content={dataAnalystDescription} title="Data Analyst">
            <FcComboChart size={70} />
          </Popover>

          <h3>Data Analyst</h3>
        </div>
        <div className="course">
          <Popover content={dataScientistDescription} title="Data Analyst">
            <FcAcceptDatabase size={70} />
          </Popover>

          <h3>Data Scientist</h3>
        </div>
        <Popover content={cPlusDescription} title="C++ Development">
          <div className="course">
            <FcCommandLine size={70} />
            <h3> C++ Development</h3>
          </div>
        </Popover>

        <div className="course">
          <Popover content={cyberSecurityDescription} title="Data Analyst">
            <FcCloth size={70} />
          </Popover>
          <h3 className="course">Cyber Security Response</h3>
        </div>
      </div>
      {/* <Link className="c-about" to="coOpsMainDiv" smooth={true}><CaretDownOutlined style={{ fontSize: '50px', color: 'black' }} /></Link> */}
    </div>
  );
}
