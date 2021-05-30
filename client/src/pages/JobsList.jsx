import React from "react";
import styled from "styled-components";
import JobCard from "../components/JobCard";
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import {Link,Router} from "react-router-dom"
import RecruiterRouter from '../RecruiterRouter'
const { Meta } = Card;

export default function JobsList() {
  return (
  
  <Container>
    
    <Cards>
    <Card
    
          style={{ padding:5,cursor:"pointer"}}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          
        >
           <Meta
              avatar={
                <Avatar src="/img/checkpoint.png" />
              }
              title="Full Stack Developer"
              // description="Check Point "
            />
            <Link to="/recruiter/checkpoint">checkpoi</Link>
        </Card>
        <Card
          style={{ padding:5,cursor:"pointer"}}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          
        >
           <Meta
              avatar={
                <Avatar src="/img/checkpoint.png" />
              }
              title="Full Stack Developer"
              description="Check Point "
            />
            <Link to="/recruiter/test">test</Link>

        </Card>
        <Card
          style={{ padding:5,cursor:"pointer"}}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          
        >
           <Meta
              avatar={
                <Avatar src="/img/checkpoint.png" />
              }
              title="Full Stack Developer"
              description="Check Point "
            />
        </Card>

    </Cards>
    <JobsDetails>
      <RecruiterRouter/>

    </JobsDetails>
    

  </Container>
  );
}

const Container = styled.div`
  width: 75vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: row;
  background-color: #b4b1b1;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Cards = styled.div`
  background-color: #DEDEDE;
  /* width: 35%; */
  flex: 0.35;
  height: 100%;
`;

const JobsDetails = styled.div`
  /* width: 65%; */
  flex: 0.65;
  height: 100%;
  background-color: #D4D4D4;
`;
