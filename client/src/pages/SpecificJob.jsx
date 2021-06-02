import React from "react";
import styled from "styled-components";

import { Input, Card, Button, Col, Row, Image, Descriptions } from 'antd';
import { black, gray, grey } from "chalk";

export default function SpecificJob({ data, closeJob, editJob }) {
  return (
    <Container>
      <Row>
        <Col sm={6}><Image
          width={100}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        /></Col>
        <Col sm={6}> <h2 style={{ marginTop: 15 }}>COMPANY PAGE</h2></Col>

      </Row>

      <Card size="small" tabBarExtraContent={<a>APPLICANS</a>} style={{ float: "left", textAlign: "left", width: 900 }}>
        <h2 style={{ textAlign: "center" }}>JOB INFO</h2>
        <Row gutter={24}>
        <Col span={12}>
          <Descriptions bordered>
            <Descriptions.Item style={{ textAlign: "left" }}>

                <p>
                  {data.workRequirements}
                </p>

            </Descriptions.Item>
          </Descriptions>
          </Col>
          <Col span={12}>
            <p>
              {data.jobDescription}
            </p>
            <p>            {data.minYearsOfExperience} YEARS OF EXPERIENCE</p>
            <p>OPEN SINCE {data.uploadDate}</p>
          </Col>
        </Row>
        <Row gutter={6}>
          <Button type="primary" onClick={() => closeJob() } style={{ marginTop: 15, marginRight: 15 }}>BACK TO JOBS</Button>
          <Button type="primary" onClick={() => editJob() } style={{ marginTop: 15, marginRight: 15 }}>EDIT</Button>
        </Row>
      </Card>

    </Container>

  );


}

const Container = styled.div`

`;
