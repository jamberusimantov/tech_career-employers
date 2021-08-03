import React, { useState, useEffect } from 'react'
import { Spin, Row } from 'antd'
import StudentCard from './card/StudentCard'
import service from '../../utils';
const { student, login } = service

const Cards = () => {
    const [studentsArray, setStudentsArray] = useState([])
    
    useEffect(() => {
        const tokenHandler = async () => {
            const token = localStorage.getItem('token')
            if (token) {
                const resFromToken = await login.getUserUseToken(token)
                if (resFromToken.success) {
                    const data = await student.getAllStudents()
                    if (data?.data) { setStudentsArray(data.data) }
                    else console.log({data});
                    
                }
            }
        }
        tokenHandler();

    }, [])

    return (
        (studentsArray.length < 1) ?
            <Spin size="large" />
            :
            <div >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {studentsArray.map((student, index) => <StudentCard key={index} num={index}  {...student} />)}
                </Row>
            </div>
    )
}

export default Cards
