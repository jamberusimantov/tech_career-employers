import { Steps, Button, message } from 'antd';
import { useState } from 'react';
import CompanyRegister from '../../pages/hr-page/Company-register';
import HrRegisterForm from '../../pages/hr-page/Hr-Register';

const { Step } = Steps;



export default function HrSteps(){
    const [current, setCurrent] = useState(1);
    const [company, setCompany] = useState('');
    const steps = [
    {   
        title: 'הרשמת מגייס',
        content: <HrRegisterForm />,
    },
    {
        title: 'הרשמת חברה',
        content: <CompanyRegister companyName={company}/>,
    },
    
];

   

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                
              
           
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            </div>
        </>
    )
}