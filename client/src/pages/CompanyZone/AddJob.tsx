import React, { useState } from 'react'
import { Card, Button, Input, Switch, Form } from 'antd';
import JobCardsHeader from './JobCardsHeader';
import { Link } from "react-router-dom"
import './JobEditPage.css';
import { postJobOffer } from '../../utils/drafts/jobOffer.utils'
import { useHistory } from 'react-router-dom';

export default function AddJob() {

    const { TextArea } = Input;
    const history = useHistory()
    // const [jobOffers, setJobOffers] = useState([])
    const [jobData, setJobData] = useState(
        {
            uploadedBy: "",
            minYearsOfExperience:"",
            position:"",
            emailHr: "",
            company: "",
            location: "",
            jobDescription: "",
            workRequirements: "",
            notes:"",
            isOpen:true,
        }
    )
    
    function sendData(){
        postJobOffer(jobData)
        console.log(jobData);
        history.push('/hr')

    }


    function statusToggel(checked:boolean) {
        console.log(`switch to ${checked}`);
            setJobData({ ...jobData, isOpen: checked})
        
      }


  
    
    

    return (
        <div>

                <JobCardsHeader />

                <div className="site-card-border-less-wrapper">
                    <Card id="editCard" title={"New job"} bordered={false}>
                        <Form>
                            <div className="JobDetails">

                                <div className="allInputClass">
                                    <Input placeholder="Name" onChange={e => setJobData({ ...jobData, uploadedBy: e.target.value })}/>
                                </div>
                               
                                <div className="allInputClass">
                                    <Input placeholder="Email" onChange={e => setJobData({ ...jobData, emailHr: e.target.value })}/>
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Company Name" onChange={e => setJobData({ ...jobData, company: e.target.value })}/>
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Position" onChange={e => setJobData({ ...jobData, position: e.target.value })}/>
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Work Requirements" onChange={e => setJobData({ ...jobData, workRequirements: e.target.value })}/>
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Years Of Experience" onChange={e => setJobData({ ...jobData, minYearsOfExperience: e.target.value })}/>
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="location" onChange={e => setJobData({ ...jobData, location: e.target.value })}/>
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Notes" onChange={e => setJobData({ ...jobData, notes: e.target.value })}/>
                                </div>

                                <div className="allInputClass">
                                    <h5>סטטוס:</h5>
                                    <Switch defaultChecked onChange={statusToggel}
                                    checkedChildren="פתוח" unCheckedChildren="סגור" 
                                    />
                                </div>

                                <div className="jobDetails">
                                    <TextArea showCount maxLength={100} onChange={e => setJobData({ ...jobData, jobDescription: e.target.value })}  placeholder="Job description"/>
                                </div>
                               
                                <div className="btns">
                                    <Button type="primary" onClick={sendData}>שמור</Button>
                                    <Link to="hr/JobCards"><Button type="primary"> הקודם</Button></Link>
                                </div>
                            </div>
                        </Form>

                    </Card>
                </div>
            </div>
        
    )
}
