import React, { useState } from 'react'
import { Spin, Card, Row, Col } from 'antd'
import StudentCard from './card/StudentCard'
const Cards = ({ students }: any) => {
    const [studentsArray, setStudentsArray] = useState([1, 2, 3, 4, 5, 6])
    const readMoreHandler:any = (e:any)=>{

    }

    return (
        (!studentsArray) ?
            <Spin />
            :
            <div className="site-card-wrapper">
                <Row gutter={30}>
                    <Col span={8} style={{margin:'5px 0'}}>
                        <Card title="Card title" bordered={false}>
                            <p>name</p>
                            <p>languages</p>
                            <p>specialty</p>
                            <button>Read more</button>
                        </Card>
                    </Col>
                    <Col span={8} style={{margin:'5px 0'}}>
                        <Card title="Card title" bordered={false}>
                            <p>name</p>
                            <p>languages</p>
                            <p>specialty</p>
                            <button>Read more</button>
                        </Card>
                    </Col>
                    <Col span={8} style={{margin:'5px 0'}}>
                        <Card title="Card title" bordered={false}>
                            <p>name</p>
                            <p>languages</p>
                            <p>specialty</p>
                            <button>Read more</button>
                        </Card>
                    </Col>
                    <Col span={8} style={{margin:'5px 0'}}>
                        <Card title="Card title" bordered={false}>
                            <p>name</p>
                            <p>languages</p>
                            <p>specialty</p>
                            <button>Read more</button>
                        </Card>
                    </Col>
                    <Col span={8} style={{margin:'5px 0'}}>
                        <Card title="Card title" bordered={false}>
                            <p>name</p>
                            <p>languages</p>
                            <p>specialty</p>
                            <button>Read more</button>
                        </Card>
                    </Col>
                    <Col span={8} style={{margin:'5px 0'}}>
                        <Card title="Card title" bordered={false}>
                            <p>name</p>
                            <p>languages</p>
                            <p>specialty</p>
                            <button>Read more</button>
                        </Card>
                    </Col>
                </Row>
            </div>
    )
}

export default Cards
