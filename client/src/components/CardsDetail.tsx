import React from "react";
import {useParams} from "react-router-dom"
import styled from "styled-components";
import { Button } from "antd";
import Title from "./Title";
// import "./";


function CardsDetail({UserInfo,firstJob}:any) {
 
  // console.log(id);
  // console.log(UserInfo)
  
  const {title,company,location,id,applicants}:any = UserInfo 
  // const {title,company,location,id,applicants}:any = UserInfo.length === 0 ? firstJob :UserInfo    
  console.log("cardsDeatails > UserInfo",UserInfo)

  return (
    <Container>
      <Title  title={title}/>
      <TopSection>
        
        <div>
          <div>
            <span>{company}</span>
            <span>{location}</span>
          </div>
          <div>
            <span>active</span>
            <span>{applicants}</span>
          </div>
          <div>last date to apply : 23/6/2021</div>
        </div>

        <Button type="primary">apply job</Button>
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
  margin-top: 2rem;
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
