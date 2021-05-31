import { API } from './app.service'
import axios from 'axios'

const headers = {
    headers: {
      authorization: localStorage.getItem('token')
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
export async function getStudent(credentials: any) {
    const { email } = credentials;
    const body = {"user":{"email":"test3@gmail.com"}}
    try {
        if (email) {
            return await(await axios.post(`${API}/students/student`,body,headers)).data.data
        }
        return 'email is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function updateStudent(credentials: any) {
    const { _id } = credentials;
    const body = {user:credentials}
    try {
        if (_id) {
            return await(await axios.put(`${API}/students/student`,body,headers)).data.data
        }
        return 'email is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function deleteStudent(credentials: any) {
    const { _id } = credentials;
    const body = {
        headers:{authorization: localStorage.getItem('token')},
        data: {
            user: credentials
        }
      }
    
    try {
        if (_id) {
           return await(await axios.delete(`${API}/students/student`,body)).data.data
        }
        return 'id is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function getAllStudents() {
    try {
        return await (await axios.get(`${API}/students/all`,headers)).data.data
    }
    catch (err) { console.error(err) }
}

