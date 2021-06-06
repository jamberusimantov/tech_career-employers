import React,{ useState,useEffect} from 'react';
import { Steps as Stepss, Button, message } from 'antd';
import FirstStep from './StuFirstStep'
import SecondStep from './StuSecondStep'
import ThirdStep from './StuThirdStep'
import service from '../../utils';
const { login } = service
const { getUserUseToken } = login

const { Step } = Stepss;

const steps = [
    {
        title: 'First',
        content: <FirstStep/>,
    },
    {
        title: 'Second',
        content: <SecondStep/>,
    },
    {
        title: 'Last',
        content: <ThirdStep/>,
    },
];
const Steps = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const getUserHandler = async()=>{
            const token = localStorage.getItem('token')
            if(token){ 
                const userData = await getUserUseToken(token)
                console.log(userData.data.steps);
                setCurrent(userData.data.steps-1)
            }
        }
        getUserHandler()
    }, [])
    const next = () => {
      setCurrent(current + 1);
    };
  
  
    return (
      <>
            <div className="steps-content">{steps[current].content}</div>
        <Stepss current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Stepss>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
        </div>
      </>
    );
}

export default Steps
