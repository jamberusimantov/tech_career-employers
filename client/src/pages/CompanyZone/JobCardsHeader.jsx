import React from 'react'
import { Typography } from 'antd';
import './JobCardsHeader.css';

export default function JobCardsHeader() {
    const { Title } = Typography;

    return (
        <div className="headerContainer">
            <Title>דף חברה</Title>
            <div className="logo">
                <img src="/img/checkpoint.png" alt="Checkpoint" />
            </div>
        </div>
    )
}
