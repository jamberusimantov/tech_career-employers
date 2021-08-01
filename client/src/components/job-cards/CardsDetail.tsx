import React from "react";
import styled from "styled-components";
import { Button,Spin } from "antd";
import Title from "./Title";



function CardsDetail({UserInfo}:any) {

  const {workRequirements,jobDescription,position,company,location,numOfPeopleApplied,status,finalDateToApply}:any = UserInfo 
  
  return (
    UserInfo ?
      
    <Container>
      <Title  title={position}/>
      <TopSection>
        <div>
          <div>
            <span>{location}</span>
           
          </div>
          <div> <span>{numOfPeopleApplied} Applied</span></div>
            <span>{company}</span>
          <div>
            <span>{status}</span>
            {/* <span>{numOfPeopleApplied}</span> */}
          </div>
          <div>final date to apply: {finalDateToApply}</div>
        </div>

        <Button style={{borderRadius:10}} type="primary">Apply</Button>
      </TopSection>

      <SecondSection>

         
            {jobDescription}
          
      </SecondSection>
        <TherdSection>
        
          {workRequirements}
        
        </TherdSection>
    </Container>
      : <Spin/>
    
  );
}

export default CardsDetail;

const Container = styled.div`
  height: 100vh;
  /* background-color: green; */
  text-align: right;
  width: 90%;
  margin: 2rem auto;
`;

const TopSection = styled.div`
  /* background-color: green; */
  margin-bottom: 3rem;
  margin-top: 0.3rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const SecondSection = styled.div`
  /* background-color: green; */
  margin-bottom: 2rem;
  /* display: flex; */
`;
const TherdSection = styled.div`
  /* background-color: green; */
  margin-bottom: 3rem;
  /* display: flex; */
`;
