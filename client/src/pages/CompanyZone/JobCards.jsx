import React, { useState } from 'react'
import { Card, Col, Row } from 'antd';
import './JobCards.css'
// import { Card } from 'antd';


export default function JobCards() {
    // return (
    //     <div className="site-card-wrapper">
    //         <Row gutter={16}>
    //             <Col span={8}>
    //                 <Card title="Card title" bordered={false}>
    //                     Card One
    //     </Card>
    //             </Col>
    //             <Col span={8}>
    //                 <Card title="Card title" bordered={false}>
    //                     Card Two
    //     </Card>
    //             </Col>
    //             <Col span={8}>
    //                 <Card title="Card title" bordered={false}>
    //                     Card Three
    //     </Card>
    //             </Col>
    //         </Row>
    //     </div>
    // )

    return (

        < div className="site-card-border-less-wrapper">
            <Card title="JOB TITLE" bordered={true} style={{ width: 400 }}>
                <p>Location</p>
                <p>Open since</p>
                <span className="applicans">Applicans</span>
                <span className="number"> 1 </span>
            </Card>
        </div>



    );
}

