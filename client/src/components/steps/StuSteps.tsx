import React, { useState, useEffect } from 'react';
import { Steps as Stepss, Button, message } from 'antd';
import FirstStep from './StuFirstStep'
import SecondStep from './StuSecondStep'
import ThirdStep from './StuThirdStep'
import service from '../../utils';
import { useParams } from 'react-router-dom'
const { login } = service
const { getUserUseToken } = login
const { Step } = Stepss;

const Steps = () => {
  const [current, setCurrent] = useState(0);
  const { token, id } = useParams<Record<string, string | undefined>>()
  const inputHandler = (step: any) => { setCurrent(step) }
  const steps = [
    { title: 'First', content: <FirstStep inputHandler={inputHandler} /> },
    { title: 'Second', content: <SecondStep /> },
    { title: 'Last', content: <ThirdStep /> },
  ];
  useEffect(() => {
    const getUserHandler = async () => {
      if (token) {
        const userData = await getUserUseToken(token)
        setCurrent(userData.data.steps - 1)
      }
    }
    getUserHandler()
  }, [])
  const next = () => { setCurrent(current + 1); };


  return (
    <>
      <div className="steps-content">{steps[current].content}</div>
      <Stepss current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Stepss>
      <div className="steps-action">

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
