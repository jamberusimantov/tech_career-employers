import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function JobCard({
  title,
  company,
  location,
  applicants,
  id,
}: any) {
  const [pageParam, setpageParam] = useState("1");
  // function onClickUsestateId() {
  //   setpageParam(JSON.stringify(id));
  //   console.log(pageParam);
    
  // }
  return (
    <Container onClick={()=>{
      setpageParam(JSON.stringify(id));
    console.log(pageParam);
    }}>
      <Link to={`/recruiter/:${id}`}>
        <Card style={{ padding: 5, cursor: "pointer" }}>
          <Meta
            avatar={
              <Avatar
                src="/img/checkpoint.png"
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              />
            }
            title={title}
            description={company}
          />

          <p>{location}</p>
          <p>{applicants}</p>
        </Card>
      </Link>
    </Container>
  );

}

const Container = styled.div`
  text-align: left;
  /* padding: 12px 24px; */
  &:hover {
    /* background-color: gray !important; */
  }
`;
