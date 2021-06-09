import { Steps, Button, message } from 'antd';
import { useState } from 'react';
import CompanyRegister from '../../pages/hr-page/Company-register';
import HrRegisterForm from '../../pages/hr-page/Hr-Register';

const { Step } = Steps;



export default function HrSteps() 
{const steps = [
    {
        title: 'הרשמת מגייס',
        content: <HrRegisterForm changeStep={(step:number)=>setCurrent(step)}/>,
    },
    {
        title: 'הרשמת חברה',
        content: <CompanyRegister />,
    },
    
];
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            </div>
        </>
    )
}