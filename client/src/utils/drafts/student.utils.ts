import { API } from '../../app.utils'
import axios from 'axios'

const headers = {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
export async function getStudentById(Id: string) {
    try {
        if (Id.length === 24) {
            return await(await axios.get(`${API}/students/student/${Id}`,headers)).data.data;
        }
        return 'bad id, check id'
    }
    catch (err) { console.error(err) }
}

export async function getStudent(credentials: any, body:any) {
    const { email } = credentials;
    
    try {
        if (email) {
            return await(await axios.post(`${API}/students/single`,body,headers)).data.data
        }
        return 'email is required'
    }
    catch (err) { console.error(err) }
}

export async function updateStudent(credentials: Object,_id:string,token:string) {
    const body = {student:credentials} // example : {student:{phone:045434343,email: tech@gmail.com}}
    const headers = {headers: {authorization: `Bearer ${token}`}}
    console.log('body', body);
    console.log('headers', headers);
    
    try {
        if (_id) {
            return await(await axios.put(`${API}/students/student/${_id}`,body,headers)).data.data
        }
        return 'email is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function deleteStudent(credentials: any) {
    const { _id } = credentials
    try {
        if (_id) {
           return await(await axios.delete(`${API}/students/student/${_id}`,headers)).data.data
        }
        return 'id is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function getAllStudents() {
    try {
        return await (await axios.get(`${API}/students/all`,headers)).data
    }
    catch (err) { console.error(err) }
}

export async function getManyStudents(credentials: any){
    const body = {student:credentials} // example : {"student":{ "courseId": "60ba50a87a6cca40fa1050a5","isGraduated":true}}

    try {
        return await (await axios.post(`${API}/students/many`,body,headers)).data.data
    }
    catch (err) { console.error(err) }
}