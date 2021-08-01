import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from "styled-components";


export default function ChatBotF() {

    // const userDetails = {
    //     fullName: '',
    //     age: 0,
    //     email: '',
    //     phone: ''
    // }


    const config = {
        width: "300px",
        height: "400px",
        floating: true,
        placeholder: 'כתוב משהו..',
        headerTitle: 'טק בוט',
    };
    const theme = {
        background: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        headerBgColor: "#00B2B2",
        headerFontColor: "#fff",
        headerFontSize: "25px",
        botBubbleColor: "#00B2B2",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#4c4c4c",
    };
    const STEPS = [
        {
            id: 'opening',
            message: 'שלום, אני העוזר האישי שלך.',
            trigger: '2',
        },
        {
            id: '2',
            message: 'האם אתה',
            trigger: '3',
        },
        {
            id: '3',
            options: [
                { value: 1, label: 'מגייס', trigger: 'מגייס' },
                { value: 2, label: 'בוגר', trigger: 'בוגר' },
            ],
        },
        {
            id: 'בוגר',
            message: 'ברוך בואך בוגר יקר ! ',
            trigger: '6',
        },
        {
            id: '6',
            message: 'אנא בחר אחת מהאפשרויות',
            trigger: '7',
        },
        {
            id: '7',
            options: [
                { value: 1, label: 'מתעניין בקורס', trigger: 'מתעניין בקורס' },
                { value: 2, label: 'רישום לאתר', trigger: 'רישום לאתר' },
            ],
        },
        {
            id: 'מתעניין בקורס',
            message: 'בחר קורס',
            trigger: 'בחר קורס',
        },
        {
            id: 'בחר קורס',
            options: [
                { value: 1, label: 'fullStack', trigger: 'רישום לאתר' },
                { value: 2, label: 'devNet', trigger: 'רישום לאתר' },
                { value: 3, label: 'ciber', trigger: 'רישום לאתר' },
            ],
        },
        {
            id: 'רישום לאתר',
            message: ' אנא מלא את השדות הבאים ויחזרו אליך בהקדם ',
            trigger: 'fullName',
        },
        {
            id: 'fullName',
            message: 'שם מלא:',
            trigger: 'name',
        },
        {
            id: 'name',
            user: true,
            trigger: 'age',
        },
        {
            id: 'age',
            message: ' היי {previousValue}, אנא הכנס גיל:  ',
            trigger: 'userAge',
        },
        {
            id: 'userAge',
            user: true,
            trigger: 'userEmail',
        },
        {
            id: 'userEmail',
            message: 'אימייל: ',
            trigger: 'userReturnEmail',
        },
        {
            id: 'userReturnEmail',
            user: true,
            trigger: 'userPhone',
        },
        {
            id: 'userPhone',
            message: 'טלפון:',
            trigger: 'userReturnPhone',
        },
        {
            id: 'userReturnPhone',
            user: true,
            trigger: 'endForm',
        },
        {
            id: 'מגייס',
            message: ' אנא מלא את השדות הבאים ויחזרו אליך בהקדם ',
            trigger: 'hrFullName',
        },
        {
            id: 'hrFullName',
            message: 'שם מלא:',
            trigger: 'hrReturnName',
        },
        {
            id: 'hrReturnName',
            user: true,
            trigger: 'hrCompany',
        },
        {
            id: 'hrCompany',
            message: 'שם חברה:',
            trigger: 'hrReturnCompany',
        },
        {
            id: 'hrReturnCompany',
            user: true,
            trigger: 'hrEmail',
        },
        {
            id: 'hrEmail',
            message: 'אימייל:',
            trigger: 'hrReturnEmail',
        },
        {
            id: 'hrReturnEmail',
            user: true,
            trigger: 'hrPhone',
        },
        {
            id: 'hrPhone',
            message: 'טלפון:',
            trigger: 'hrReturnPhone',
        },
        {
            id: 'hrReturnPhone',
            user: true,
            trigger: 'endForm',
        },

        {
            id: 'phone',
            user: true,
            trigger: ({ value, steps }:any) => {
                if (steps['phone'] === undefined) {
                    return ' אנא הכנס טלפון'
                } else {
                    return 'phone';
                }
            }
        },
        {
            id: 'endForm',
            message: 'פרטייך התקבלו בהצלחה,יום טוב.',
            // trigger: '',
            end: true,
        },
        {
            id: '8',
            user: true,
            validator: (value:any) => {
                if (!isNaN(value)) {
                    return 'הכנס ערך טקסט';
                }
                return true;
            },
            trigger: 'opening',
        },
        {
            id: 'num',
            message: 'אנא הכנס טקסט מתאים',
            trigger: '8',
        },
    ]


    return (
        <>
            <div dir="rtl" >
                <ThemeProvider theme={theme}>
                    <ChatBot {...config} steps={STEPS} />
                </ThemeProvider>
            </div>
        </>
    )
}