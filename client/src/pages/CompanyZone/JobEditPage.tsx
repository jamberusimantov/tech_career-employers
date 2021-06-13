import React, { useEffect, useState } from 'react'
import { Card, Button, Input, InputNumber, Radio, Form } from 'antd';
import JobCardsHeader from './JobCardsHeader';
import { Link } from "react-router-dom"
import './JobEditPage.css';
import Login from '../../utils/login.utils'
import { useLocation } from 'react-router-dom'

export default function JobEditPage() {
    const { TextArea } = Input;

    const [value, setValue] = useState(1);
    const [cardType, setCardType] = useState(false)
    const [jobOffers, setJobOffers] = useState([])
    const [jobData, setJobData] = useState(
        {
            uploadedBy: "",
            position:"",
            emailHr: "",
            company: "",
            location: "",
            jobDescription: "",
            workRequirements: "",
            notes:"",
            status:"",
        }
    )
    const location: any = useLocation();
    const JobObject: any = location.state.jobData;
    console.log(JobObject);

    
    function yearsOfExperience(num: Number) {
        console.log('changed', num);
    };
    function jobStatusChange(e: any) {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    function changeCardType() {
        if (cardType === false) { setCardType(true) }
        else { setCardType(false) }
    };

   
    return (
        (!cardType) ?
            <div>

                <JobCardsHeader />

                <div className="site-card-border-less-wrapper">


                    <Card id="showCard" title={JobObject.company} bordered={false} style={{ width: 700 }}>

                        <div className="JobRequirement">
                            <h2>{JobObject.position}</h2>
                            <h3>{JobObject.jobDescription}</h3>
                            <p>{JobObject.minYearsOfExperience} שנות ניסיון</p>
                            <p>זמינות: {JobObject.status}</p>
                        </div>
                        <div className="jobDetails">
                            <p>{JobObject.notes} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam, officiis velit consequatur quidem at, cupiditate aspernatur molestias commodi ab dolorum fugiat nam blanditiis tenetur omnis dolores cumque, libero dolorem.</p>
                        </div>
                        <div className="btns">
                            <Button type="primary" onClick={changeCardType}>ערוך</Button>
                            <Link to="hr/JobCards"><Button type="primary"> הקודם</Button></Link>
                        </div>
                    </Card>

                </div>
            </div>

            :

            <div>

                <JobCardsHeader />

                <div className="site-card-border-less-wrapper">



                    <Card id="editCard" title={JobObject.company} bordered={false}>
                        <Form>
                            <div className="JobDetails">

                                <div className="allInputClass">
                                    <Input placeholder="Name" />
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Email" />
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Company Name" />
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Position" />
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Work Requirements" />
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="location" />
                                </div>
                                <div className="allInputClass">
                                    <Input placeholder="Notes" />
                                </div>

                                <div className="allInputClass">
                                    <h5>סטטוס:</h5>
                                    <Radio.Group className="allInputClass" onChange={jobStatusChange} value={value}>
                                        <Radio value={1}>פתוח </Radio>
                                        <Radio value={2}>סגור</Radio>
                                    </Radio.Group>
                                </div>

                                <div className="jobDetails">
                                    <TextArea rows={10} placeholder="Job description" />
                                </div>
                                <div className="btns">
                                    <Button type="primary" onClick={changeCardType}>שמור</Button>
                                    <Link to="hr/JobCards"><Button type="primary"> הקודם</Button></Link>
                                </div>
                            </div>
                        </Form>

                    </Card>
                </div>
            </div>
    )
}
