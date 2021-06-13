import React, { useState, useEffect } from 'react'
import { Spin, Row } from 'antd'
import StudentCard from './card/StudentCard'
import service from '../../utils';
const { student, login } = service

const Cards = () => {
    const [studentsArray, setStudentsArray] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token'))

    useEffect(() => {
        const tokenHandler = async () => {
            if (token) {
                const resFromToken = await login.getUserUseToken(token)
                if (resFromToken.success) {
                    const data = await student.getAllStudents()
                    if (data) { setStudentsArray(data.data) }
                }
            }
        }
        tokenHandler();

    }, [token])

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
