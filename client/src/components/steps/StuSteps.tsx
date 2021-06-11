import React, { useState, useEffect } from 'react';
import { Steps as Stepss, Button, message } from 'antd';
import FirstStep from './StuFirstStep'
import SecondStep from './StuSecondStep'
import ThirdStep from './StuThirdStep'
import service from '../../utils';
import { useParams } from 'react-router-dom'
const { login, student } = service
const { getUserUseToken } = login
const { updateStudent } = student
const { Step } = Stepss;

const Steps = () => {
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState('');
  const { token, id } = useParams<Record<string, string | undefined>>()
  const inputHandler = (step: any) => { setCurrent(step) }
  const updateHandler = (obj: any) => {
    if (typeof (id) === 'string' && typeof (token) === 'string') {
      updateStudent(obj, id, token)
    }
  }
  const steps = [
    { title: 'First', content: <FirstStep email={email} updateStudent={updateHandler} inputHandler={inputHandler} /> },
    { title: 'Second', content: <SecondStep updateStudent={updateHandler} inputHandler={inputHandler}  /> },
    { title: 'Last', content: <ThirdStep updateStudent={updateHandler}/> },
  ];
  useEffect(() => {
    const getUserHandler = async () => {
      if (token) {
        const userData = await getUserUseToken(token)
        setEmail(userData.data.email);
        setCurrent(userData.data.steps - 1)
      }
    }
    getUserHandler()
  }, [])

  return (
    <>
      <div className="steps-content">{steps[current].content}</div>
      <Stepss current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Stepss>
      <div className="steps-action">
      </div>
    </>
  );
}

export default Steps
