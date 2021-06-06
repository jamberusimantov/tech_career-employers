import React,{useEffect,useState} from 'react'
import {getStudentById} from '../../utils/drafts/student.utils'

const AboutStudent = () => {
    const [user, setUser] = useState({})
    let studentId = window.location.pathname.slice(6).split('%20').join('')
    useEffect(()=> {
        async function fetchMyAPI() {
            let response = await getStudentById(studentId)
            response = await response.json()
            setUser(response)
          }
      
          fetchMyAPI()
    }, [])
    return (
        <div>student info</div>
        // <div className="userClass my-5 text-dark rounded-lg p-3" style={stylesInnerBox}>
        //     {user != null && <React.Fragment>
        //         <div><h3><u>Name</u> :  {user.name.first} {user.name.last}</h3>
        //             <h3><u>Age</u> :  {+user.dob.age}</h3>
        //             <h3><u>Year of birth</u> :  {user.dob.date.split('T')[0]}</h3>
        //             <h3><u>Gender</u> :  {user.gender}</h3>
        //             <h3><u>Email</u> :  {user.email}</h3>
        //             <h3><u>Phone</u> :  {user.phone}</h3>
        //             <h3><u>Address</u> :  {`${user.location.city}, ${user.location.country}`}</h3></div>
        //         <div><img className="m-2 rounded-lg" src={user.picture.large} width="100%" alt="" /></div>
        //     </React.Fragment>}
        // </div>
    )
}

export default AboutStudent
