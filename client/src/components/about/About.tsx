import React from 'react'
import './About.css'
import { DownCircleFilled } from "@ant-design/icons";
export default function About() {
    return (
        <div id="aboutMainDiv">
            
            <img className="tcLogo" src="./images/logotech.png" alt="" />
            <div className="texttext">
                <h2> מי אנחנו ?</h2>
                <p>
                טק-קריירה הינה עמותה חברתית שקמה בשנת 2002 במטרה לשנות מהותית את
                מצבה הכלכלי והחברתי של קהילת יוצאי אתיופיה בישראל באמצעות
                השתלבות בתפקידים מקצועיים בעולם ההייטק.<br /> הפעילות העיקרית של
                העמותה הינה הכשרה של צעירים יוצאי אתיופיה למגוון מקצועות
                טכנולוגיים וליווי עד להשתלבות מלאה בעבודה, <br />וזאת באמצעות מרכז
                ההכשרה הטכנולוגי שלה, העבודה המקצועית של צוות העמותה ושיתופי
                הפעולה הרבים עם חברות ואנשים מתעשיית ההייטק.<br /> בשנים האחרונות
                הכשירה העמותה כ- 100 משתתפים מדי שנה (4-5 קורסים בשנה), עם מעל
                90% השמה, באמצעות מודל הכשרה יחודי.<br /> העמותה ממוקמת במרכז לוד, עם
                כיתות ומשרדים במתחם טלרד ודירות שכורות לסטודנטים בשכונות
                הסמוכות.
                </p>
                <img className="givun" src="./images/giv.png" alt="" />
                <br />
                
            </div>
            <a href="#coOpsMainDiv">
        <DownCircleFilled className="DownCircleFilled" />
      </a>
        </div>
    )
}