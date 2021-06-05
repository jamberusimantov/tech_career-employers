import React,{useEffect} from "react";
import styled from "styled-components";
import JobCard from "../components/JobCard";
import "../components/";
import {getManyJobOffers} from '../utils/jobOffer.utils'


import { Row, Col } from "antd";

import RecruiterRouter from "./LinkdInRouter";

export default function JobsList() {
  // useEffect( () => {
  //    getManyJobOffers()
  //   .then(data => props.popBooks(data))

  // }, []);

  return (
    <Container>
      <Row style={{ width: "100%" }}>
        <Col
          span={16}
          push={8}
          style={{ overflowY: "scroll", height: "100%" }}
          className="colRightCards"
        >
          <RecruiterRouter />
        </Col>

        <Col span={8} pull={16} style={{ overflowY: "scroll", height: "100%" }} className="allCardsCol">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </Col>
      </Row>
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

// const Cards = styled.div`
//   background-color: #dedede;
//   /* width: 35%; */
//   flex: 0.35;
//   height: 100%;
// `;

// const JobsDetails = styled.div`
//   /* width: 65%; */
//   flex: 0.65;
//   height: 100%;
//   background-color: #d4d4d4;
// `;

// const RightCards = styled.div`
//   &::hover {
//     overflow-y: scroll;
//   }
// `;
