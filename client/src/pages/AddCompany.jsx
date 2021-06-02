import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Button, Upload, notification } from 'antd';
import { postCompany, updateCompany, updateLogo } from "../service/company.service";
import { UploadOutlined } from '@ant-design/icons';

export default function AddCompany(props = {}) {
  const [page, setPage] = useState(1);
  
  const [currentFile, setCurrentFile] = useState(null);
  const [currentAddress, setCurrentAddress] = useState("");
  const [currentSiteLink, setCurrentSiteLink] = useState("");
  const [currentAbout, setCurrentAbout] = useState("");
  
  useEffect(async () => {
    if(props.id) {
      console.log(props)
      setCurrentAddress(props.companyData.address)
      setCurrentSiteLink(props.companyData.site)
      setCurrentAbout(props.companyData.about)
    }
  }, [page]);

  const handleFileSelected = (e) => {
    // const files = Array.from(e.target.files)
    setCurrentFile(e.fileList[0].originFileObj);
  }

  const submitForm = async () => {
    let json = {
      "logo": "",
      "address": currentAddress,
      "site": currentSiteLink,
      "about": currentAbout,
    }
    if(props.id) {
      json.Id = props.id;
      let res = await updateCompany(json);
      if(res && res.success) {
        notification.success({
          message: "Success",
          description: "Company is updated!"
        });
        if(currentFile) {
          const fData = new FormData()
          fData.append("image.jpg", currentFile);
          await updateLogo(fData, props.id);
        }
        props.closeEditCompany()
      }
      console.log(res);
    } else {
    let res = await postCompany(json);
    if(res && res.success) {
      notification.success({
        message: "Success",
        description: "New Company is created!"
      });
      if(res.data && res.data[0] && currentFile) {
        const fData = new FormData()
        fData.append("image.jpg", currentFile);
        await updateLogo(fData, res.data[0]._id);
      }
    }
    console.log(res);
    }
  }

  const upload = {
    multiple: false,
    maxCount: 1
  };

  return (
    <Container style={{ marginTop: 20, padding: 20 }}>
      <h2>COMPANY INFO</h2>
      <Upload {...upload} onChange={(e) => handleFileSelected(e)}>
        <Button  icon={<UploadOutlined />} style={{ textAlign: "right", float: 'right', marginBottom: 16, color: "lightgray" }}>add pic/logo</Button>
      </Upload>

      <Input type="text" value={currentAddress} onChange={(e) => setCurrentAddress(e.target.value)} style={{ marginBottom: 16 }} placeholder="adress" />
      <Input type="text" value={currentSiteLink} onChange={(e) => setCurrentSiteLink(e.target.value)} style={{ marginBottom: 16 }} placeholder="site link" />
      <Input type="text" value={currentAbout} onChange={(e) => setCurrentAbout(e.target.value)} style={{ marginBottom: 16 }} placeholder="about" />

      {props.id ? 
      <>
      <Button type="primary" onClick={() => props.closeEditCompany()} style={{ marginLeft: 10 }}>Back</Button>
      <Button type="primary" onClick={submitForm}>Update</Button>
      </>
      : 
      <Button type="primary" onClick={submitForm}>Save</Button>
       }
    </Container>

  );
}

const Container = styled.div`

`;
