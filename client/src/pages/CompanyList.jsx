import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { List, Typography, Divider } from 'antd';
import { getAllCompany, getCompanyById } from "../service/company.service";
import CompanyPage from "./CompanyPage";

export default function CompanyList() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [id, setId] = useState("");

  useEffect(async () => {
    let companyList = await getAllCompany();
    setData(companyList.data);
  }, [page]);

  const openCompany = async (d) => {
    setId(d._id);
    setCompanyData(d);
    // let res = await getCompanyById(d._id);
    // console.log(res);
  }

  const closeCompany = () => {
    setId("");
  }

  return (
    <Container style={{ marginTop: 20, backgroundColor: "white"}}>
                {id == "" ?
      <List
      header={<div>COMPANY List</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item style={{ cursor: "pointer" }} onClick={() => { openCompany(item)}}>
          {item.about}
        </List.Item>
      )}
    /> : "" }
    {id != "" ? 
    <CompanyPage id={companyData._id} closeCompany={closeCompany}></CompanyPage> : "" }
    </Container>

  );
}

const Container = styled.div`

`;
