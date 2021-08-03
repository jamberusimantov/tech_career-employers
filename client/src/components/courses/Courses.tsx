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
import {  Modal,Tooltip } from "antd";
import "./Courses.css";
import "aos/dist/aos.css";

export default function Courses() {
  const [
    isModalVisibleFullStackDescription,
    setIsModalVisibleFullStackDescription,
  ] = useState(false);
  const [
    isModalVisibleQaDescription,
    setIsModalVisibleQaDescription,
  ] = useState(false);
  const [
    isModalVisibleDevNetDescription,
    setIsModalVisibleDevNetDescription,
  ] = useState(false);
  const [
    isModalVisibleSocAnalystDescription,
    setIsModalVisibleSocAnalystDescription,
  ] = useState(false);
  const [
    isModalVisibleSalesforceImplementsDescription,
    setIsModalVisibleSalesforceImplementsDescription,
  ] = useState(false);
  const [
    isModalVisibleDataAnalystDescription,
    setIsModalVisibleDataAnalystDescription,
  ] = useState(false);
  const [
    isModalVisibleDataScientistDescription,
    setIsModalVisibleDataScientistDescription,
  ] = useState(false);
  const [
    isModalVisibleCPlusDescription,
    setIsModalVisibleCPlusDescription,
  ] = useState(false);
  const [
    isModalVisibleCyberDescription,
    setIsModalVisibleCyberDescription,
  ] = useState(false);




  const showModalFullStackDescription = () => {
    setIsModalVisibleFullStackDescription(true);
  };
  const showModalQaDescription = () => {
    setIsModalVisibleQaDescription(true);
  };
  const showModalDevNetDescription = () => {
    setIsModalVisibleDevNetDescription(true);
  };
  const showModalSocAnalystDescription = () => {
    setIsModalVisibleSocAnalystDescription(true);
  };
  const showModalSalesforceImplementsDescription = () => {
    setIsModalVisibleSalesforceImplementsDescription(true);
  };
  const showModalDataAnalystDescription = () => {
    setIsModalVisibleDataAnalystDescription(true);
  };
  const showModalDataScientistDescription = () => {
    setIsModalVisibleDataScientistDescription(true);
  };
  const showModalCPlusDescription = () => {
    setIsModalVisibleCPlusDescription(true);
  };
  const showModalCyberDescription = () => {
    setIsModalVisibleCyberDescription(true);
  };

  const handleOkFullStackDescription = () => {
    setIsModalVisibleFullStackDescription(false);
  };
  const handleOkQaDescription = () => {
    setIsModalVisibleQaDescription(false);
  };
  const handleOkDevNetDescription = () => {
    setIsModalVisibleDevNetDescription(false);
  };
  const handleOkSocAnalystDescription = () => {
    setIsModalVisibleSocAnalystDescription(false);
  };
  const handleOkSalesforceImplementsDescription = () => {
    setIsModalVisibleSalesforceImplementsDescription(false);
  };
  const handleOkDataAnalystDescription = () => {
    setIsModalVisibleDataAnalystDescription(false);
  };
  const handleOkDataScientistDescription = () => {
    setIsModalVisibleDataScientistDescription(false);
  };
  const handleOkCPlusDescription = () => {
    setIsModalVisibleCPlusDescription(false);
  };
  const handleOkCyberDescription = () => {
    setIsModalVisibleCyberDescription(false);
  };

  const handleCancelFullStackDescription = () => {
    setIsModalVisibleFullStackDescription(false);
  };
  const handleCancelQaDescription = () => {
    setIsModalVisibleQaDescription(false);
  };
  const handleCancelDevNetDescription = () => {
    setIsModalVisibleDevNetDescription(false);
  };
  const handleCancelSocAnalystDescription = () => {
    setIsModalVisibleSocAnalystDescription(false);
  };
  const handleCancelSalesforceImplementsDescription = () => {
    setIsModalVisibleSalesforceImplementsDescription(false);
  };
  const handleCancelDataAnalystDescription = () => {
    setIsModalVisibleDataAnalystDescription(false);
  };
  const handleCancelDataScientistDescription = () => {
    setIsModalVisibleDataScientistDescription(false);
  };
  const handleCancelCPlusDescription = () => {
    setIsModalVisibleCPlusDescription(false);
  };
  const handleCancelCyberDescription = () => {
    setIsModalVisibleCyberDescription(false);
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
            visible={isModalVisibleFullStackDescription}
            onOk={handleOkFullStackDescription}
            onCancel={handleCancelFullStackDescription}
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
          <span onClick={showModalFullStackDescription}>
            <Tooltip title="לחץ לצפיה בפרטי הקורס">
              <FcMultipleDevices size={70} />
            </Tooltip>
            ,
          </span>

          <h3> Full Stack Web Development</h3>
        </div>

        <div className="course">
          <Modal
            title="QA"
            visible={isModalVisibleQaDescription}
            onOk={handleOkQaDescription}
            onCancel={handleCancelQaDescription}
          >
            <div className="courseDescription">
              <ul>
                <h3 className="courseStructure">מבנה הקורס</h3>
                <li>
                  400 שעות לימוד אקדמיות, מתוכן תרגול התמחות מעשית ופיתוח
                  פרוייקטי לייב אשר פותחו במיוחד לטובת הקורס (הלמידה תהיה פיזית
                  בכיתה בקמפוס טק-קריירה בלוד / בקפסולות / מרחוק – בהתאם להנחיות
                  הממשלה בכל זמן נתון).
                </li>
                <li>4 חודשים, 5 ימי לימוד מלאים בשבוע בתנאי פנימייה</li>
                <li>
                  לימודים מסביב לשעון: שילוב בין לימודים עם מרצה בכיתה, למידה
                  עצמית אונליין, תרגול עצמי ובקבוצות
                </li>
                <li>העשרות והרצאות אורח ע"י אנשי מקצוע העובדים בתחום</li>
                <li>
                  סיורים לימודיים בחברות הייטק (בהתאם לנהלי הקורונה במועד
                  הרלווטני)
                </li>
                <li>
                  תכנית מקיפה להכנה לקריירה: כתיבת קו"ח מקצועיים באנגלית, כלים
                  לחיפוש עבודה, הכנה לראיונות כולל סימולציות ע"י מראיינים
                  מהתעשייה
                </li>
                <li>
                  תכנית מנטורים המלווים באופן אישי כל סטודנט עד להשתלבות מלאה
                  בעבודה
                </li>
              </ul>
              <ul>
                <h3 className="courseStructure">תכנים עיקריים</h3>
                <li>Introduction to Computers scientist</li>
                <li>Introduction to operating system - Linux</li>
                <li>Introduction to OOP programing languages</li>
                <li>Introduction to operating system - windows</li>
                <li>introduction to network and communication</li>
                <li>Scripts language (JS, Pearl, Ruby)</li>
                <li>Data bases and SQL</li>
                <li>Software Testing management and methodology</li>
                <li>Testing management tools</li>
                <li>Testing Network software ,cloud, mobile & web world</li>
                <li>Automations tools</li>
                <li>QA environment and working skills</li>
                <li>Final project, testing, Analysis, execution</li>
              </ul>
            </div>
          </Modal>
          <span onClick={showModalQaDescription}>
            <Tooltip title="לחץ לצפיה בפרטי הקורס">
              <FcFinePrint size={70} />
            </Tooltip>
            ,
          </span>
          <h3>QA – Manual and Automation</h3>
        </div>

        <div className="course">
          <Modal
            title="CCNA, CCNP, DevNet"
            visible={isModalVisibleDevNetDescription}
            onOk={handleOkDevNetDescription}
            onCancel={handleCancelDevNetDescription}
          >
            <div className="courseDescription">
              <ul>
                <h3 className="courseStructure">מבנה הקורס</h3>
                <li>צריך מידע על הקורס</li>
              </ul>
              <ul>
                <h3 className="courseStructure">תכנים עיקריים</h3>
                <li>צריך מידע על הקורס</li>
              </ul>
            </div>
          </Modal>
          <span onClick={showModalDevNetDescription}>
            <Tooltip title="לחץ לצפיה בפרטי הקורס">
              <FcGlobe size={70} />
            </Tooltip>
          </span>
          ,<h3>CCNA, CCNP, DevNet</h3>
        </div>

        <div className="course">
          <Modal
            title="Soc Analyst"
            visible={isModalVisibleSocAnalystDescription}
            onOk={handleOkSocAnalystDescription}
            onCancel={handleCancelSocAnalystDescription}
          >
            <div className="courseDescription">
              <ul>
                <h3 className="courseStructure">מבנה הקורס</h3>
                <li>
                  550 שעות לימוד אקדמיות, מתוכן 50% מעבדות ותרגולים אשר פותחו
                  במיוחד לטובת הקורס על ידי צוות המומחים של סייברפרו (פיזית
                  בכיתה בקמפוס טק-קריירה בלוד / בקפסולות / מרחוק – בהתאם להנחיות
                  הממשלה בכל זמן נתון).
                </li>
                <li>
                  5 חודשים, 5 ימי לימוד מלאים בשבוע בתנאי פנימיה (מגורים בדירות
                  של טק-קריירה בלוד)
                </li>
                <li>
                  לימודים מביב לשעון: שילוב בין לימודים עם מורה בכיתה, מעבדות,
                  תרגול עצמי ובקבוצות
                </li>
                <li>העשרות והרצאות אורח ע"י אנשי מקצוע העובדים בתעשייה</li>
                <li>
                  סיורים לימודיים בחברות סייבר (בהתאם לנהלי הקורונה במועד
                  הרלווטני)
                </li>
                <li>
                  תכנית מקיפה להכנה לקריירה: כתיבת קו"ח מקצועיים באנגלית, כלים
                  לחיפוש עבודה, הכנה לראיונות כולל סימולציות ע"י מראיינים
                  מהתעשייה תכנית
                </li>
              </ul>

              <ul>
                <h3 className="courseStructure">תכנים עיקריים</h3>
                <li>Linux</li>
                <li>Microsoft Domain Technologies</li>
                <li>CYBER ESSENTIALS: Network Technologies Threat </li>
                <li>Introduction to Network Forensics</li>
                <li> Python. BLUE TEAM: Enterprise Defenses</li>
                <li>Check Point Final Blue Team Challenge</li>
                <li> Windows Malware Forensics</li>
                <li>Hunting with SIEM</li>
              </ul>
            </div>
          </Modal>
          <span onClick={showModalSocAnalystDescription}>
            <Tooltip title="לחץ לצפיה בפרטי הקורס">
              <FcMindMap size={70} />
            </Tooltip>
          </span>
          ,<h3> Soc Analyst</h3>
        </div>

        <div className="course">
          <Modal
            title="Salesforce Implements"
            visible={isModalVisibleSalesforceImplementsDescription}
            onOk={handleOkSalesforceImplementsDescription}
            onCancel={handleCancelSalesforceImplementsDescription}
          >
            <div className="courseDescription">
              <ul>
                <h3 className="courseStructure">מבנה הקורס</h3>
                <li>צריך מידע על הקורס</li>
              </ul>
              <ul>
                <h3 className="courseStructure">תכנים עיקריים</h3>
                <li>צריך מידע על הקורס</li>
              </ul>
            </div>
          </Modal>

          <span onClick={showModalSalesforceImplementsDescription}>
            <Tooltip title="לחץ לצפיה בפרטי הקורס">
              <FcEnteringHeavenAlive size={70} />
            </Tooltip>
          </span>

          <h3> Salesforce Implements</h3>
        </div>

        <div className="course">
          <Modal
            title="Data Analyst"
            visible={isModalVisibleDataAnalystDescription}
            onOk={handleOkDataAnalystDescription}
            onCancel={handleCancelDataAnalystDescription}
          >
            <div className="courseDescription">
              <ul>
                <h3 className="courseStructure">מבנה הקורס</h3>
                <li>
                  500 שעות לימוד אקדמיות, מתוכן 50% תרגול מעשי והשלמת פרוייקטי
                  לייב אשר פותחו במיוחד לטובת הקורס (הלמידה תהיה פיזית בכיתה
                  בקמפוס טק-קריירה בלוד / בקפסולות / מרחוק – בהתאם להנחיות
                  הממשלה בכל זמן נתון).
                </li>
                <li>4 חודשים, 3 ימי לימוד מלאים בשבוע מבוקר עד לילה.</li>
                <li>
                  לימודים מביב לשעון: שילוב בין לימודים עם מורה בכיתה, מעבדות,
                  תרגול עצמי ובקבוצות
                </li>
                <li>העשרות והרצאות אורח ע"י אנשי מקצוע העובדים בתעשייה</li>
                <li>
                  סיורים לימודיים בחברות סייבר (בהתאם לנהלי הקורונה במועד
                  הרלווטני)
                </li>
                <li>
                  תכנית מקיפה להכנה לקריירה: כתיבת קו"ח מקצועיים באנגלית, כלים
                  לחיפוש עבודה, הכנה לראיונות כולל סימולציות ע"י מראיינים
                  מהתעשייה - תכנית
                </li>
              </ul>

              <ul>
                <h3 className="courseStructure">תכנים עיקריים</h3>
                <li>סטטיסטיקה לניתוח ותחקור נתונים</li>
                <li>
                  יישום התיאוריה והכלים הטכניים SQL, Excel, Tableau לאנליזה יום
                  יומית של אנליסט נתונים
                </li>
                <li>
                  שימוש במודול Python לאנליזה וויזואליזציה של נתונים – שפת
                  התחקור ועבודה עם נתונים הפופולרית ביותר
                </li>
                <li>
                  שימוש בכלים מתקדמים כמו google analytics, power BI ו- Facebook
                  לניתוח מוצרים דיגיטליים
                </li>
                <li>פרויקט גמר המשלב את כלל הכלים שנלמדו בקורס</li>
              </ul>
            </div>
          </Modal>
          <span onClick={showModalDataAnalystDescription}>
            <Tooltip title="לחץ לצפיה בפרטי הקורס">
              <FcComboChart size={70} />
            </Tooltip>
          </span>
          <h3>Data Analyst</h3>
        </div>

        <div className="course">
          <Modal
            title="Data Scientist"
            visible={isModalVisibleDataScientistDescription}
            onOk={handleOkDataScientistDescription}
            onCancel={handleCancelDataScientistDescription}
          >
            <div className="courseDescription">
              <ul>
                <h3 className="courseStructure">מבנה הקורס</h3>
                <li>
                  500 שעות לימוד אקדמיות, מתוכן 50% תרגול מעשי והשלמת פרוייקטי
                  לייב אשר פותחו במיוחד לטובת הקורס (הלמידה תהיה פיזית בכיתה
                  בקמפוס טק-קריירה בלוד / בקפסולות / מרחוק – בהתאם להנחיות
                  הממשלה בכל זמן נתון).
                </li>
                <li>4 חודשים, 3 ימי לימוד מלאים בשבוע מבוקר עד לילה.</li>
                <li>
                  לימודים מביב לשעון: שילוב בין לימודים עם מורה בכיתה, מעבדות,
                  תרגול עצמי ובקבוצות
                </li>
                <li>העשרות והרצאות אורח ע"י אנשי מקצוע העובדים בתעשייה</li>
                <li>
                  סיורים לימודיים בחברות סייבר (בהתאם לנהלי הקורונה במועד
                  הרלווטני)
                </li>
                <li>
                  תכנית מקיפה להכנה לקריירה: כתיבת קו"ח מקצועיים באנגלית, כלים
                  לחיפוש עבודה, הכנה לראיונות כולל סימולציות ע"י מראיינים
                  מהתעשייה - תכנית
                </li>
              </ul>

              <ul>
                <h3 className="courseStructure">תכנים עיקריים</h3>
                <li>סטטיסטיקה לניתוח ותחקור נתונים</li>
                <li>
                  יישום התיאוריה והכלים הטכניים SQL, Excel, Tableau לאנליזה יום
                  יומית של אנליסט נתונים
                </li>
                <li>
                  שימוש במודול Python לאנליזה וויזואליזציה של נתונים – שפת
                  התחקור ועבודה עם נתונים הפופולרית ביותר
                </li>
                <li>
                  שימוש בכלים מתקדמים כמו google analytics, power BI ו- Facebook
                  לניתוח מוצרים דיגיטליים
                </li>
                <li>פרויקט גמר המשלב את כלל הכלים שנלמדו בקורס</li>
              </ul>
            </div>
          </Modal>
          <span onClick={showModalDataScientistDescription}>
            <Tooltip title="לחץ לצפיה בפרטי הקורס">
              <FcAcceptDatabase size={70} />
            </Tooltip>
          </span>
          <h3>Data Scientist</h3>
        </div>

        <div className="course">
          <Modal
            title="C++ Development"
            visible={isModalVisibleCPlusDescription}
            onOk={handleOkCPlusDescription}
            onCancel={handleCancelCPlusDescription}
          >
            <div className="courseDescription">
              <ul>
                <h3 className="courseStructure">מבנה הקורס</h3>

                <li>
                  300 שעות לימוד אקדמיות, מתוכן 50% תרגול מעשי והשלמת פרוייקטי
                  לייב אשר פותחו במיוחד לטובת הקורס (הלמידה תהיה פיזית בכיתה
                  בקמפוס טק-קריירה בלוד / בקפסולות / מרחוק – בהתאם להנחיות
                  הממשלה בכל זמן נתון).
                </li>
                <li>3 חודשים, 3 ימי לימוד מלאים בשבוע</li>
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
                <li>Object-Oriented Fundamentals, Structures and References</li>
                <li>Classes and Objects</li>
                <li>Polymorphic Programming</li>
                <li>Code Reuse in C++</li>
                <li>Designing with C++</li>
                <li>Data structure</li>
                <li>Testing & Debugging & Engineering practices</li>
                <li>Embedded software</li>
              </ul>
            </div>
          </Modal>
          <span onClick={showModalCPlusDescription}>
            <Tooltip title="לחץ לצפיה בפרטי הקורס">
              <FcCommandLine size={70} />
            </Tooltip>
          </span>

          <h3> C++ Development</h3>
        </div>

        <div className="course">
        <Modal
            title="Cyber Security Response"
            visible={isModalVisibleCyberDescription}
            onOk={handleOkCyberDescription}
            onCancel={handleCancelCyberDescription}
          >
             <div className="courseDescription">
              <ul>
                <h3 className="courseStructure">מבנה הקורס</h3>
                <li>צריך מידע על הקורס</li>
              </ul>
              <ul>
                <h3 className="courseStructure">תכנים עיקריים</h3>
                <li>צריך מידע על הקורס</li>
              </ul>
            </div>
          </Modal>
          <span onClick={showModalCyberDescription}>
            <Tooltip title="לחץ לצפיה בפרטי הקורס">
            <FcCloth size={70} />
            </Tooltip>
          </span>
          
          <h3 className="course">Cyber Security Response</h3>
        </div>
      </div>
    </div>
  );
}
