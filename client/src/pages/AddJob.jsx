import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Button, Upload, notification } from 'antd';
import { postCompany } from "../service/company.service";
import { postJobOffer, updateJobOffer } from "../service/jobOffer.service";

export default function AddJob(props) {

  const id = props.id;
  const singleJob = props.singleJob;
  const closeAddJob = props.closeAddJob;
  const [page, setPage] = useState(1);
  const [currentcompany, setCurrentcompany] = useState("");
  const [currentlocation, setCurrentlocation] = useState("");
  const [currentjobDescription, setCurrentjobDescription] = useState("");
  const [currentworkRequirements, setCurrentworkRequirements] = useState("");
  const [currentminYearsOfExperience, setCurrentminYearsOfExperience] = useState("");
  const [currentnotes, setCurrentnotes] = useState("");

  useEffect(async () => {
    if (singleJob) {
      setCurrentlocation(singleJob.location)
      setCurrentjobDescription(singleJob.jobDescription)
      setCurrentworkRequirements(singleJob.workRequirements)
      setCurrentminYearsOfExperience(singleJob.minYearsOfExperience)
      setCurrentnotes(singleJob.notes)
    }
    console.log(singleJob);
  }, [page]);

  const submitForm = async () => {
    let json = {
      uploadedBy: "HR",
      company: id,
      location: currentlocation,
      jobDescription: currentjobDescription,
      workRequirements: currentworkRequirements,
      minYearsOfExperience: currentminYearsOfExperience,
      notes: currentnotes,
    }
    if (singleJob) {
      json.Id = singleJob._id;
      let res = await updateJobOffer(json);
      if (res && res.success) {
        notification.success({
          message: "Success",
          description: "Company is updated!"
        });
        closeAddJob();
      }
      console.log(res);
    } else {
      let res = await postJobOffer(json);
      if (res && res.success) {
        notification.success({
          message: "Success",
          description: "New Company is created!"
        });
        closeAddJob();
      }
      console.log(res);
    }
  }

  return (
    <Container style={{ marginTop: 20 }}>
      <h2>
        {singleJob ? "Update JOB" : "Add new JOB"}
      </h2>
      <Input type="text" value={currentlocation} onChange={(e) => setCurrentlocation(e.target.value)} style={{ marginBottom: 16 }} placeholder="location" />
      <Input type="text" value={currentjobDescription} onChange={(e) => setCurrentjobDescription(e.target.value)} style={{ marginBottom: 16 }} placeholder="job description" />
      <Input type="text" value={currentworkRequirements} onChange={(e) => setCurrentworkRequirements(e.target.value)} style={{ marginBottom: 16 }} placeholder="work requirements" />
      <Input type="text" value={currentminYearsOfExperience} onChange={(e) => setCurrentminYearsOfExperience(e.target.value)} style={{ marginBottom: 16 }} placeholder="min years of experience" />
      <Input type="text" value={currentnotes} onChange={(e) => setCurrentnotes(e.target.value)} style={{ marginBottom: 16 }} placeholder="notes" />
      { singleJob ? <Button type="primary" onClick={submitForm} style={{ marginBottom: 20 }} style={{ marginLeft: 10 }}>
        Back
      </Button> : ""}
      <Button type="primary" onClick={submitForm} style={{ marginBottom: 20 }}>
        {singleJob ? "Update" : "Save"}
      </Button>

    </Container>

  );
}

const Container = styled.div`

`;
