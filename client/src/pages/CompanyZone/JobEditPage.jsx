import React from 'react'
import { Card, Button } from 'antd';
import JobCardsHeader from './JobCardsHeader';
import { Link } from "react-router-dom"

import './JobEditPage.css';

export default function JobEditPage() {
    return (
        <div>
            <JobCardsHeader />
            <div className="site-card-border-less-wrapper">
                <Card title="פרטי משרה" bordered={false} style={{ width: 700 }}>
                    <div className="JobRequirement">
                        <h3>fullstack dev</h3>
                        <p>0-2 שנות ניסיון</p>
                        <p>זמינות: 1.6.21</p>
                    </div>
                    <div className="jobDetails">
                        <p>Were looking for junior frontend developer.
                        Required: React, MongoDb...
                        </p>
                    </div>
                    <div className="btns">
                        <Button type="primary">ערוך</Button>
                        <Link to="/JobCards"><Button type="primary"> הקודם</Button></Link>
                    </div>
                </Card>
            </div>
        </div>
    )
}
