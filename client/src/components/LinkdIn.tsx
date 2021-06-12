import React, { useEffect, useState } from "react";
import styled from "styled-components";
import JobCard from "../components/job-cards/JobCard";
import "../components/";
import { getManyJobOffers } from "../utils/drafts/jobOffer.utils";
import { Input, Row, Col,Spin } from "antd";
import LinkdInRouter from "./LinkdInRouter";
import { useParams } from "react-router-dom";

export default function JobsList() {
const { Search } = Input;
const [fetchedDataDb, setfetchedDataDb] = useState<any>([])
const [UserInfo, setUserInfo] = useState([]);


useEffect( () => {
  const fetchData=  async ()=>{
     let fetchedData = await getManyJobOffers({isHidden:false})
    //  console.log(fetchedData);
     setfetchedDataDb(fetchedData.data)
    }
   // getManyJobOffers({isHidden:false}).then((data)=>{console.log(data)})
   fetchData()
 }, []);

//  console.log(fetchedDataDb);

// production level MockUp

const CardsData: any = [
  {
    title: "Full-Stack developer",
    company: "Checkpoint",
    location: "Tel Aviv",
    numOfPeopleApplied: "numOfPeopleApplied 7",
    id: 1,
  },
  {
    title: "Full-Stack developer",
    company: "Microsoft",
    location: "Tel Aviv",
    numOfPeopleApplied: "numOfPeopleApplied 23",
    id: 2,
  },
    {
      title: "Full-Stack developer",
      company: "Google",
      location: "Herzeliya",
      numOfPeopleApplied: "numOfPeopleApplied 12",
      id: 3,
    },
    {
      title: "Full-Stack developer",
      company: "Ebay",
      location: "Tel Aviv",
      numOfPeopleApplied: "numOfPeopleApplied 41",
      id: 4,
    },
    {
      title: "Full-Stack developer",
      company: "Zencity",
      location: "Reẖovot",
      numOfPeopleApplied: "numOfPeopleApplied 31",
      id: 5,
    },
    {
      title: "Full-Stack developer",
      company: "HoneyBook",
      location: "Ra'ananna",
      numOfPeopleApplied: "numOfPeopleApplied 12",
      id: 6,
    },
    {
      title: "Full-Stack developer",
      company: "Fiverr",
      location: "Herzeliya",
      numOfPeopleApplied: "numOfPeopleApplied 18",
      id: 7,
    },
    {
      title: "Full-Stack developer",
      company: "RapidAPI",
      location: "Herzeliya",
      numOfPeopleApplied: "numOfPeopleApplied 3",
      id: 8,
    },
    {
      title: "Full-Stack developer",
      company: "Revuze",
      location: "Herzeliya",
      numOfPeopleApplied: "numOfPeopleApplied 5",
      id: 9,
    },
  ];
  let firstJob = CardsData[0];
  let { id }: any = useParams();
  
 
  return (
    <>
    {
      
      fetchedDataDb ?
      
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
              fetchedDataDb.map((item: any) => {
                return <JobCard setUser={setUserInfo} userItem={item} />;
              })
            )}
          </Col>
        </Row>
      </Container>
    </MainContainer>: <Spin/>}
    </>
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
