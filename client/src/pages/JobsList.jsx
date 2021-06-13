import React from "react";
import styled from "styled-components";
import JobCard from "../components/JobCard";

export default function JobsList() {
  return (
    <Container>
      <Cards>
        {/* <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
         */}
      </Cards>
      <JobsDetails>

      </JobsDetails>
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

const Cards = styled.div`
  background-color: #3b463b;
  /* width: 35%; */
  flex: 0.35;
  height: 100%;
`;

const JobsDetails = styled.div`
  /* width: 65%; */
  flex: 0.65;
  height: 100%;
  background-color: #e0d0d0;
`;
