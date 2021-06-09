import React, { useEffect, useState } from "react";
import styled from "styled-components";
import JobCard from "../components/JobCard";
import "../components/";
import { getManyJobOffers } from "../utils/drafts/jobOffer.utils";
import { Input, Row, Col } from "antd";
import LinkdInRouter from "./LinkdInRouter";
import { useParams } from "react-router-dom";

const { Search } = Input;

export default function JobsList() {
  useEffect(() => {}, []);

  const [IdCard, setIdCard] = useState(1);
  const [UserInfo, setUserInfo] = useState([]);

  const CardsData: any = [
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

  let firstJob = CardsData[0];

  let { id }: any = useParams();

  return (
    <MainContainer>
      <Search placeholder="search" enterButton="Search" size="large" />
      <Container>
        <Row style={{ width: "100%" }}>
          <Col
            span={16}
            push={8}
            style={{ overflowY: "scroll", height: "100%" }}
            className="colRightCards"
          >
            <LinkdInRouter UserInfo={UserInfo} firstJob={firstJob} />
          </Col>

          <Col
            span={8}
            pull={16}
            style={{ overflowY: "scroll", height: "100%" }}
            className="allCardsCol"
          >
            {React.Children.toArray(
              CardsData.map((item: any) => {
                return <JobCard setUser={setUserInfo} userItem={item} />;
              })
            )}
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
`;
