import React from "react";
import styled from "styled-components";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";

const { Meta } = Card;

export default function JobCard() {
  return (
    <Container>
      <Link to="/recruiter/checkpoint">
        <Card style={{ padding: 5, cursor: "pointer"}}>
          <Meta
            avatar={<Avatar size="large" src="/img/checkpoint.png" />}
            title="Full Stack Developer"
             description="Check Point "
          />
         
          <p>Tel Aviv</p>
          <p>Aplicants 5</p>
        </Card>
      </Link>
    </Container>
  
  );
}


const Container = styled.div`
text-align: left;
&:hover{
  background-color: gray !important;

}
`
