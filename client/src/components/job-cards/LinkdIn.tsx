import React, { useEffect, useState } from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import "..";
import { getManyJobOffers } from "../../utils/drafts/jobOffer.utils";
import { Input, Row, Col, Spin } from "antd";
import LinkdInRouter from "./LinkdInRouter";
import { useParams } from "react-router-dom";

export default function JobsList() {
  const { Search } = Input;
  const [fetchedDataDb, setfetchedDataDb] = useState<any>([]);
  const [UserInfo, setUserInfo] = useState([]);
  const [firstJob, setfirstJob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let fetchedData = await getManyJobOffers({ isHidden: false });
      //  console.log(fetchedData);
      setfetchedDataDb(fetchedData.data);
      // setfirstJob(fetchedDataDb[0])
    };
    // getManyJobOffers({isHidden:false}).then((data)=>{console.log(data)})
    fetchData();
  }, []);

  // production level MockUp

  
  // let firstJob = fetchedDataDb[0];
  let { id }: any = useParams();

  return (
    <>
      {fetchedDataDb ? (
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
        </MainContainer>
      ) : (
        <Spin />
      )}
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
