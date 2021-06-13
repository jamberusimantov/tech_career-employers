import React, { useState,useEffect } from "react";
import {useParams} from "react-router-dom"
import styled from "styled-components";
import { Button,Spin } from "antd";
import Title from "./Title";



function CardsDetail({UserInfo}:any) {
  // const [firstJobFromInfo, setfirstJobFromInfo] = useState(fetchedDataDb[0])
  
  // useEffect(() => {
  //   setfirstJobFromInfo(UserInfo)    
  //   console.log(firstJobFromInfo,"firstJobFromInfo");
  //   console.log(firstJob,"firstJob");
    
  // }, []);
  const {position,company,location,numOfPeopleApplied,status,finalDateToApply}:any = UserInfo 
  
    

    // const {title,company,location,id,applicants}:any =  firstJob     

  
  // console.log("cardsDeatails > UserInfo",UserInfo)

  return (
    UserInfo ?
      
    <Container>
      <Title  title={position}/>
      <TopSection>
        <div>
          <div>
            <span>{company}-</span>
            <span>{location}-</span>
            <span>{numOfPeopleApplied}</span>
          </div>
          <div>
            <span>{status}</span>
            {/* <span>{numOfPeopleApplied}</span> */}
          </div>
          <div>{finalDateToApply}</div>
        </div>

        <Button style={{borderRadius:10}} type="primary">Apply</Button>
      </TopSection>

      <SecondSection>
        <TherdSection>

          <p className="jobDescription">
            At DeePathology.ai, we are developing next generation tools for AI
            in Pathology, that unleash massive AI creation, and radically
            optimize accuracy and time utilization in pharma and diagnostics.
            <br />
            Our STUDIO platform lets Pathologists create AI solutions by
            themselves, leveraging Active Learning, Interactive/Online Learning
            and more.
          </p>
          <p>
            As a Full Stack Engineer, you will work on both the frontend and
            backend of our STUDIO platform and other large scale systems we are
            building for pathology.
          </p>
        </TherdSection>
        <div>
          <h4>Minimum Qualifications:</h4>
          <ul>
            <li>Must: 3+ Years experience in Angular or Vue or React</li>
            <li>
              {" "}
              Hands-on experience with HTML5, CSS3, JavaScript, Typescript.
            </li>
            <li>Good knowledge of Python.</li>
            <li>"Let's make this happen!" attitude</li>
            <li>Team player, self learning abilities, independence.</li>
          </ul>
        </div>
      </SecondSection>
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
