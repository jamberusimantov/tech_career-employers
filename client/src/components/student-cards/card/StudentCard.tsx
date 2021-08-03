import React from 'react'
import { Card, Col, Avatar,Typography,Button} from 'antd';
import { useHistory } from "react-router-dom";
import './cards.css'
const { Title } = Typography;
const { Meta } = Card;

const StudentCard = (student: any) => {
    const history = useHistory();
    
    const readMoreHandler: any = () => {history.push(`/studentPage/${student._id}`)}
    return (
            <Col xs={{ span: 24}} sm={{ span: 12 }} lg={{ span: 8 }}   className="gutter-row" onClick={readMoreHandler}>
            <Card style={{  margin:'20px 5px' }}
            className="site-card-wrapper" 
            hoverable 
            >
                <Meta
                    avatar={<Avatar
                    size={{ xs: 32, sm: 40, md: 64, lg: 84, xl: 100, xxl: 100 }}
                    src={student.profilePicture} />}
                    title={student.name}
                    description={student.courseName + ' Developer'} 
                    />
                    <br/>
                    <Title  level={5}>{student.programmingLang.join(', ')}</Title>
                     <Button shape="round" onClick={readMoreHandler}>More info</Button>
            </Card>
        </Col>
        
       
    )
}

export default StudentCard
