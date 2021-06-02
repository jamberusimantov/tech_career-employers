import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Input, Card, Button, Col, Row, Image, Menu, Dropdown, Space, Avatar } from 'antd';
import { getCompanyById, getJobsByCompanyId } from "../service/company.service";
import AddJob from "./AddJob";
import SpecificJob from "./SpecificJob";
import AddCompany from "./AddCompany";
import SubMenu from "antd/lib/menu/SubMenu";
import moment from "moment";
import { API } from '../app.utils'

export default function CompanyPage({ id, closeCompany }) {
  const [page, setPage] = useState(1);
  const [companyData, setCompanyData] = useState({});
  const [jobData, setJobData] = useState([{}]);
  const [addNewJob, setAddNewJob] = useState(false);
  const [singleJob, setSingleJob] = useState(null);
  const [editCompany, setEditCompany] = useState(false);

  useEffect(async () => {
    let res = await getCompanyById(id);
    setCompanyData(res.data);
    let res2 = await getJobsByCompanyId(id, "");
    setJobData(res2.data);

    console.log(res2.data);
    console.log(jobData);
  }, [page]);

  const closeJob = async () => {
    setSingleJob(null);
    let res2 = await getJobsByCompanyId(id, "");
    setJobData(res2.data);
  }

  const editJob = () => {
    setAddNewJob(true);
  }

  const closeAddJob = async () => {
    setAddNewJob(false);
    let res2 = await getJobsByCompanyId(id, "");
    setJobData(res2.data);
  }

  const openEditCompany = () => {
    setEditCompany(true);
  }

  const closeEditCompany = async () => {
    setEditCompany(false);
    let res = await getCompanyById(id);
    setCompanyData(res.data);
  }

  const sortData = async (key) => {
    let res2 = await getJobsByCompanyId(id, key);
    setJobData(res2.data);
  }

  const getJobData = () => {
    let t = jobData.length > 0 ? jobData.map((item, i) => {
      return <Col key={i} span={12} style={{ marginTop: 10 }}>
        <Card  size="small" tabBarExtraContent={<a>APPLICANS</a>} style={{ width: "90%" }}>
          <Row gutter={24}>
            <Col span={12}>
              <p>APPLICANS</p>
              <Avatar style={{ color: 'black', backgroundColor: 'gray' }} size={60} >
                {item.numOfPeopleApplied}
              </Avatar>
            </Col>
            <Col span={12}>
              <p>{item.jobDescription}</p>
              <p>{item.location}</p>
              <p>{moment(item.uploadDate).format("MMMM Do YYYY")}</p>
              <p style={{ cursor: "pointer" }} onClick={() => setSingleJob(item)}>READ MORE</p>
            </Col>
          </Row>
        </Card>
      </Col>
    }) : "";
    return t;
  }

  return (
    <Container style={{ padding: 10 }}>
      {addNewJob == true ?
        <AddJob id={id} singleJob={singleJob} closeAddJob={closeAddJob}></AddJob> :
        singleJob != null ?
          <SpecificJob editJob={editJob} closeJob={closeJob} data={singleJob}></SpecificJob>
          :
          editCompany == true ?
            <AddCompany id={id} companyData={companyData} closeEditCompany={closeEditCompany}></AddCompany>
            :
            <Container>

              <Row>
                <Col sm={8}>
                  <Button style={{ marginTop: 20, marginLeft: 20 }} type="primary" onClick={() => closeCompany()}>Back</Button>
                  <Button style={{ marginTop: 20 }} type="primary" onClick={() => openEditCompany()}>Edit</Button>
                </Col>
                <Col sm={8}> <h2 style={{ marginTop: 15 }}>
                  {companyData.about}
                </h2></Col>
                <Col sm={8}><Image
                  width={100}
                  src={ API + "/" + companyData.logo}
                /></Col>
              </Row>
              <Row>
                <Col><Button type="primary" onClick={() => setAddNewJob(true)}>ADD NEW JOB</Button></Col>
                <Col>
                  <Menu>
                    <SubMenu key="SubMenu" title="SORT JOBS BY">
                      <Menu.Item>
                        <a href="#!" onClick={ () => { sortData('jobDescription') }}>
                          Title
                    </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="#!" onClick={ () => { sortData('uploadDate') }}>
                          DATE
      </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="#!" onClick={ () => { sortData('location') }}>
                          LOCATION
      </a>
                      </Menu.Item>
                    </SubMenu>

                  </Menu>
                </Col>

              </Row>
              <Row style={{ marginTop: 10 }}>
                {getJobData()}
              </Row>
            </Container>
      }

    </Container>
  );

}

const Container = styled.div`

`;
