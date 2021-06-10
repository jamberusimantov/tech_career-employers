import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import Title from "./Title";

function CardsDetals5() {
  return (
    <Container>
      <Title title="Full-Stack developer" />
      <TopSection>
        <div>
          <div>
            {/* <DribbbleOutlined /> */}
            <span>Zencity</span>
            <span> -Rehovot</span>
          </div>
          <div>
            <span>active</span>
            <span> -applicants 31</span>
          </div>
          <div>last date to apply : 21/7/2021</div>
        </div>

        <Button type="primary">apply job</Button>
      </TopSection>

      <SecondSection>
        <TherdSection>
          <p className="jobDescription">
            With more than a billion active listings, tens of millions of daily
            transactions, conducted by tens of millions of sellers / hundreds of
            millions of buyers, across more than 30 countries, and 22 different
            currencies, comprised of a product catalog staggering in diversity -
            eBay is a marketplace like no other that has ever existed If you’re
            interested in joining a purpose driven community that is dedicated
            to creating an ambitious and inclusive workplace, join eBay – a
            company you can be proud to be a part of.
            <br />
            In this role you will be a part of eBay’s global Seller Insights
            group in support of dramatically elevating the capabilities of all
            of eBay’s Selling.
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
            <li>2+ years of hands-on knowledge of Java application development, testing and frameworks (Spring Boot)</li>
            <li>
              {" "}
              Hands-on experience with HTML5, CSS3, JavaScript, Typescript.
            </li>
            <li>Experience with NoSQL DBs (Elasticsearch , Redis , MongoDB , etc.)</li>
            <li>Strong organizational and project management skills.</li>
            <li>"Let's make this happen!" attitude</li>
            <li>Team player, self learning abilities, independence.</li>
            <li>Passion for both client-side and server-side development</li>
            <li>Familiarity with following technological stack: React.JS, Redux, Node.js, Ruby on Rails, AWS, Elastic Search, Redis, MySQL</li>
            <li>Experience building web applications from scratch in a production environment</li>
            <li>Ability to lead component/service end-to-end from design to working product, on time with quality</li>
            <li>Ownership, initiative, and self-motivation</li>
            <li>Self-learner, fast learner</li>
            <li>Excellent understanding of JS</li>
            <li>Use your analytical and development skills to analyze, measure and improve front-end performance.</li>
            <li>Use your entrepreneurial spirit, combined with your passion for technology, to create unique solutions - from ideation to production-grade code - building state of the art, scalable software.</li>
            <li>Tech-savvy - like to learn and develop your tech skills with the latest technology and methodologies </li>
            <li>Excellent understanding of JS</li>
            <li>Significant experience in design and development of Internet-scale systems with massive amounts of data</li>
            <li>Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design</li>
          </ul>
        </div>
      </SecondSection>
    </Container>
  );
}

export default CardsDetals5;

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
