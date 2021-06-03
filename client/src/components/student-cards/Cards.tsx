import React, { useState } from 'react'
import { Spin, Card, Row, Col } from 'antd'
const Cards = ({ students }: any) => {
    const [studentsArray, setStudentsArray] = useState([1,2,3,4,5,6])


    return (
        (!studentsArray) ?
            <Spin />
            :
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                <p>name</p>
                                <p>languages</p>
                                <p>specialty</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
    )
}

export default Cards
