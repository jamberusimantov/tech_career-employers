import React, { useEffect } from "react";
import styled from "styled-components";
import JobCard from "../components/job-cards/JobCard";
import "../components/";
import { getManyJobOffers } from "../utils/drafts/jobOffer.utils";
import { Input, Row, Col } from "antd";
import RecruiterRouter from "./LinkdInRouter";

const { Search } = Input;

export default function JobsList() {
  // useEffect( () => {
  //    getManyJobOffers()
  //   .then(data => props.popBooks(data))

  // }, []);
  const CardsData = [
    {
      title: "Full-Stack developer",
      company: "Checkpoint",
      location: "Tel Aviv",
      applicants: "applicants 7",
      id: 1,
    },
    {
      title: "Full-Stack developer",
      company: "Microsoft",
      location: "Tel Aviv",
      applicants: "applicants 23",
      id: 2,
    },
    {
      title: "Full-Stack developer",
      company: "Google",
      location: "Herzeliya",
      applicants: "applicants 12",
      id: 3,
    },
    {
      title: "Full-Stack developer",
      company: "Ebay",
      location: "Tel Aviv",
      applicants: "applicants 41",
      id: 4,
    },
    {
      title: "Full-Stack developer",
      company: "Zencity",
      location: "Reẖovot",
      applicants: "applicants 31",
      id: 5,
    },
    {
      title: "Full-Stack developer",
      company: "HoneyBook",
      location: "Ra'ananna",
      applicants: "applicants 12",
      id: 6,
    },
    {
      title: "Full-Stack developer",
      company: "Fiverr",
      location: "Herzeliya",
      applicants: "applicants 18",
      id: 7,
    },
    {
      title: "Full-Stack developer",
      company: "RapidAPI",
      location: "Herzeliya",
      applicants: "applicants 3",
      id: 8,
    },
    {
      title: "Full-Stack developer",
      company: "Revuze",
      location: "Herzeliya",
      applicants: "applicants 5",
      id: 9,
    },
  ];

  return (
    <MainContainer>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        loading
      />
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

          <Col
            span={8}
            pull={16}
            style={{ overflowY: "scroll", height: "100%" }}
            className="allCardsCol"
          >
            {CardsData.map((item) => {
              return (
                <JobCard
                  title={item.title}
                  company={item.company}
                  location={item.location}
                  applicants={item.applicants}
                  id={item.id}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
      </MainContainer>
  );
}

const Container = styled.div`
  width: 75vw;
  height: 100vh;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
  background-color: #b4b1b1;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

const MainContainer = styled.div`
  width: 75vw;
  margin: auto;



`

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
