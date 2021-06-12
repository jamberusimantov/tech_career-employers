import React from 'react'
import Cards from '../../components/student-cards/Cards'
import {Spin} from 'antd'
import { useHistory } from "react-router-dom";


function Student() {
    let history = useHistory();

    return (
        localStorage.getItem('token')
        ? 
        <div><Cards/></div>
        :
        <><Spin/>
       { history.push("/")}
        </>
    )
}

export default Student;
