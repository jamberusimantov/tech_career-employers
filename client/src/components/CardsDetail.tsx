import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import Title from "./Title";
import '../components/'

function CardsDetail() {
  return (
    <div>
      <div className="top-section">
        <Title title="Full-Stack developer" />
        <div>
          <span>company</span>
          <span> -location</span>
        </div>
        <div>
          <span>status</span>
          <span> -applicants</span>
        </div>
        <div>מועד אחרון להגשה</div>
        <Button type="primary">apply job</Button>
      </div>

      <div className="second-section">
        <div>
          <p className="jobDescription">
            At DeePathology.ai, we are developing next generation tools for AI
            in Pathology, that unleash massive AI creation, and radically
            optimize accuracy and time utilization in pharma and diagnostics.<br/>
            Our STUDIO platform lets Pathologists create AI solutions by
            themselves, leveraging Active Learning, Interactive/Online Learning
            and more.
          </p>
          <p>
            As a Full Stack Engineer, you will work on both the frontend and
            backend of our STUDIO platform and other large scale systems we are
            building for pathology.
          </p>
        </div>
        <div>
          <h4>Minimum Qualifications:</h4>
          <ul>
            <li>Must: 3+ Years experience in Angular or Vue or React</li>
            <li> Hands-on experience with HTML5, CSS3, JavaScript, Typescript.</li>
            <li>Good knowledge of Python.</li>
            <li>"Let's make this happen!" attitude</li>
            <li>Team player, self learning abilities, independence.</li>
          </ul>
          {/* <p className="jobrequerments">
            Minimum Qualifications: - Must: 3+ Years experience in Angular or
            Vue or React - Hands-on experience with HTML5, CSS3, JavaScript,
            Typescript. - Good knowledge of Python. - "Let's make this happen!"
            attitude - Team player, self learning abilities, independence.
            Preferred Skills: - Knowledge in C#. - Databases: SQL and NoSQL
            (redis).
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default CardsDetail;


