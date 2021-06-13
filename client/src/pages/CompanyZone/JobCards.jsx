import React, { useState, useEffect } from 'react'
import { getManyJobOffers } from '../../service/jobOffer.service';
import { Card, Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './JobCards.css';
import JobEditPage from './JobEditPage';
import JobCardsHeader from './JobCardsHeader';
import { Link } from "react-router-dom";


export default function JobCards(props) {


    useEffect(gerAllJobsOffer, []);

    const [jobOffer, setJobOffer] = useState([]);

    function gerAllJobsOffer() {
        getManyJobOffers().then((res) => { setJobOffer(res) })
    }
console.log("hello there", jobOffer);

    const menu = (
        <Menu>
            <Menu.Item>
                <a href="#"> כותרת</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#"> תאריך</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#"> מיקום</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <JobCardsHeader />
            < div className="site-card-border-less-wrapper">
                <div className="navBtn">
                    <Button>ערוך</Button>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            מיון משרות   <DownOutlined />
                        </a>
                    </Dropdown>
                    <div className="addNewJobBtn">
                        <Button>הוסף משרה חדשה</Button>
                    </div>
                </div>

                <Card title="פרטי משרה" bordered={true} style={{ width: 400 }}>
                    <p>תפקיד</p>
                    <p>מיקום</p>
                    <p>זמינות</p>
                    <span className="applicans">פניות</span>
                    <span className="number"> 1 </span>
                    <Link to="/JobEditPage"><Button className="readMoreBtn" type="primary">קרא עוד</Button></Link>
                </Card>
                {/* <p>{jobOffer}</p> */}
            </div>
        </div >

    );
}

