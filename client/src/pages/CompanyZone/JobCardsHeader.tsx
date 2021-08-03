import React from 'react'
// import { Typography } from 'antd';
import './JobCardsHeader.css';

export default function JobCardsHeader() {
     //const { Title } = Typography;

    return (
        <div className="headerContainer">
            <h1>דף חברה</h1>
            <div className="logo">
                <img src="/img/checkpoint.png" alt="Checkpoint" />
            </div>
        </div>
    )
}
