import React, { useEffect, useState } from 'react'
import { Card, Button } from 'antd';
import JobCardsHeader from './JobCardsHeader';
import { Link } from "react-router-dom"
import { getManyJobOffers } from '../../utils/drafts/jobOffer.utils'
import './JobEditPage.css';
import Login from '../../utils/login.utils'
import { useLocation } from 'react-router-dom'
 
export default function JobEditPage() {

const [jobOffers, setJobOffers] = useState([])
const location:any = useLocation ();

const JobObject:any  = location.state.jobData;
    console.log(JobObject);
    
   

    return (
        <div>

            <JobCardsHeader />
            <div className="site-card-border-less-wrapper">
                <Card title={JobObject.company}  bordered={false} style={{ width: 700 }}>
                    <h1>hello</h1>
                    <div className="JobRequirement">
                        <h2>{JobObject.position}</h2>
                        <h3>{JobObject.jobDescription}</h3>
                        <p>{JobObject.minYearsOfExperience} שנות ניסיון</p>
                        <p>זמינות: {JobObject.status}</p>
                    </div>
                    <div className="jobDetails">
                        <p>{JobObject.notes}</p>
                    </div>
                    <div className="btns">
                        <Button type="primary">ערוך</Button>
                        <Link to="hr/JobCards"><Button type="primary"> הקודם</Button></Link>
                    </div>
                </Card>
            </div>
        </div>
    )
}
