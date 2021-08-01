import React from "react";
import styled from "styled-components";

import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function JobCard({ userItem, setUser }: any): any {
  const { position, company, location, _id, numOfPeopleApplied } = userItem;
  

  return (
    <Container
      onClick={() => {
        setUser(userItem);
      }}
    >
      <Link to={`/recruiter/:${_id}`}>
        <Card style={{ padding: 5, cursor: "pointer" }}>
          <Meta
            avatar={
              <Avatar
                src={`/img/${company}.png`}
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              />
            }
            title={position}
            description={company}
          />

          <p>{location}</p>
            <p>{numOfPeopleApplied}</p>
        </Card>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  text-align: left;
  /* padding: 12px 24px; */
  outline: none;
  border: none;

  /* img{
    width: 100%;
    height: 100%;
    
    

  } */
  .ant-card-meta-avatar{
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-card-meta-avatar img{
width: 100%;
height: 100%;
  }

`
