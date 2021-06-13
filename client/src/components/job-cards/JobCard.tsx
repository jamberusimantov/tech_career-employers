import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function JobCard({ userItem, setUser }: any): any {
  const { position, company, location, _id, numOfPeopleApplied } = userItem;
  console.log("user item",userItem)  

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
                src="/img/checkpoint.png"
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
  
`;
