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
            return await (await axios.get(`${API}/students/student/${Id}`, headers)).data.data;
        }
        return 'bad id, check id'
    }
    catch (err) { console.error(err) }
}
export async function getStudent(credentials: any, body: any) {
    const { email } = credentials;

    try {
        if (email) {
            return await (await axios.post(`${API}/students/single`, body, headers)).data.data
        }
        return 'email is required'
    }
    catch (err) { console.error(err) }
}
export async function updateStudent(credentials: { _id: string }, _id: string, token: string) {
    credentials._id = _id;
    const body = { student: credentials } // example : {student:{phone:045434343,email: tech@gmail.com}}
    const fileUploadHeaders = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    try {
        if (credentials._id) {
            return (await axios.put(`${API}/students/student/${credentials._id}`, body, fileUploadHeaders)).data

        }
        return 'id is required '
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function deleteStudent(credentials: any) {
    const { _id } = credentials
    try {
        if (_id) {
            return await (await axios.delete(`${API}/students/student/${_id}`, headers)).data.data
        }
        return 'id is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function getAllStudents() {
    try {
        return await (await axios.get(`${API}/students/all`, headers)).data
    }
    catch (err) { console.error(err) }
}
export async function getManyStudents(credentials: any) {
    const body = { student: credentials } // example : {"student":{ "courseId": "60ba50a87a6cca40fa1050a5","isGraduated":true}}

    try {
        return await (await axios.post(`${API}/students/many`, body, headers)).data.data
    }
    catch (err) { console.error(err) }
}
export const getCV = async (Id: string) => {
    try {
        const res = await axios.get(`${API}/files/download/${Id}`);
        if (!res) return { success: false, message: 'failure' }
        return { success: true, data: res.data }
    } catch (error) {
        // console.error(error)
        return { success: false, error }
    } finally { }
}