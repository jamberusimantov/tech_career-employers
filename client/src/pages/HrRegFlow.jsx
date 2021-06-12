import React, { useState } from "react";
import styled from "styled-components";
import { Input,Button, notification } from 'antd';
import httpRequest from "../service/http.service";
import loginService from "../service/login.service";
const apiEndpoint = process.env.apiEndpoint;

export default function HrRegFlow() {
  
  const [currentMail, setCurrentMail] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentConfirmPassword, setCurrentConfirmPassword] = useState("");
  

  const submitForm = async () => {
    let json = {
        "email": currentMail,
        "name": currentName,
        "phone": currentPhone,
        "password": currentPassword,
        "password1": currentConfirmPassword
    }
    let res = await loginService.signUpHr(json);
    if(res && res.success) {
      notification.success({
        message: "Success",
        description: "New RECRUITER is created!"
      });
      setCurrentMail("");
      setCurrentName("");
      setCurrentPhone("");
      setCurrentPassword("");
      setCurrentConfirmPassword("");
    }
    console.log(res);
  }

  return (
    <Container style={{ marginTop: 20}}>
       <h2>REG NEW RECRUITER</h2>
        <Input type="text" onKeyUp={(e) => setCurrentMail(e.target.value)} style={{ marginBottom: 16 }} placeholder="mail" />
        <Input type="text" onKeyUp={(e) => setCurrentName(e.target.value)} style={{ marginBottom: 16 }} placeholder="name" />
        <Input type="text" onKeyUp={(e) => setCurrentPhone(e.target.value)} style={{ marginBottom: 16 }} placeholder="telephone" />
        <Input type="password" onKeyUp={(e) => setCurrentPassword(e.target.value)} style={{ marginBottom: 16 }} placeholder="password" />
        <Input type="password" onKeyUp={(e) => setCurrentConfirmPassword(e.target.value)} style={{ marginBottom: 16 }} placeholder="confirm password" />
        <Button type="primary" onClick={submitForm}  style={{ marginBottom: 16}}>Save</Button>
    </Container>
  );
}

const Container = styled.div`

`;
