import React from 'react'
import { Card,Col} from 'antd';

const StudentCard = () => {
    return (
        <div>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    <p>name</p>
                    <p>languages</p>
                    <p>specialty</p>
                </Card>
            </Col>
        </div>
    )
}

export default Card
