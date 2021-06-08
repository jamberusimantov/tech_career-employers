const studentCollection = require('./student_model')
const DB = require('../../utils/DB.utils')
const register = require('../../utils/register.utils')

const {authRequest} = register
const { getDoc, updateDoc, deleteDoc, getManyDocs, msgs } = DB
const {idChecker,tokenChecker,successHandler,failHandler,queryHandler,dataHandler} = require('../../utils/ctrl.utils')


/**
 * Get graduates by course id from student collection
 * @param {*} req 
 * @param {*} res 
 */


async function getGraduatesByCourseId(req, res) {
    // const token = req.headers.authorization
    // const courseId = req.params.courseId;
    const courseId = req.params.courseId;
    const query = { courseId };

    // if(tokenChecker(token,res) !== true) return;
    if(idChecker(courseId,res) !== true) return;
    const getDocSuccessCb = (data)=> successHandler(data,res,'got')
    const getDocFailCb = () => failHandler(courseId,res)
    const request = async() => {
        if (getRes && getRes.error) throw new Error(getRes.error);
    }
    try {
        const getRes = await getManyDocs(studentCollection, query, getDocSuccessCb, getDocFailCb)
        // authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
}



/**
 * Get student by id from student collection
 * @param {*} req 
 * @param {*} res 
 */
async function getStudentByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    const student = { _id }
    if(idChecker(_id,res) !== true) return
    if(tokenChecker(token,res) !== true) return
    const getDocSuccessCb = (data)=> successHandler(data,res,'got')
    const getDocFailCb = () => failHandler(_id,res)
    const request = async() => {
        const getRes = await getDoc(studentCollection, student, getDocSuccessCb, getDocFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error);
    }
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * get student from student collection
 * @param {*} req 
 * @param {*} res 
 */
async function getStudent(req, res) {
    const token = req.headers.authorization
    const student = req.body.student;
    if(tokenChecker(token,res) !== true) return
    if(dataHandler(student,res) !== true) return
    const getDocSuccessCb = (data)=> successHandler(data,res,'got')
    const getDocFailCb = () => failHandler('student',res)
    const request = async() => {
        const getRes = await getDoc(studentCollection, student, getDocSuccessCb, getDocFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error);
    }
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * update student from student collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateStudentById(req, res) {
    const token = req.headers.authorization
    const student = req.body.student;
    const _id = req.params.Id;
    console.log(_id);
    if(tokenChecker(token,res) !== true) return
    if(idChecker(_id,res) !== true) return
    student._id = _id;
    const updateDocSuccessCb = (data)=> successHandler(data,res,'updated')
    const updateDocFailCb = () => failHandler(_id,res)
    const request = async() => {
        const getRes = await updateDoc(studentCollection, student, updateDocSuccessCb, updateDocFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/** 
 * delete student from student collection
 * @param {*} req 
 * @param {*} res 
 */
 async function deleteStudentByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    const student = { _id }
    if(idChecker(_id,res) !== true) return
    if(tokenChecker(token,res) !== true) return
    const request = async(data) => {
        const getRes = await deleteDoc(studentCollection, student, deleteDocSuccessCb, deleteDocFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const deleteDocSuccessCb = (data)=> successHandler(data,res,'deleted')
    const deleteDocFailCb = () => failHandler(_id,res)
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } 
}
/** 
 * get all students from student collection
 * @param {*} req 
 * @param {*} res 
 */

async function getAllStudents(req, res) {
    const token = req.headers.authorization
    if(tokenChecker(token,res) !== true) return
    const getAllDocsSuccessCb = (data)=> successHandler(data,res,'list')
    const getAllDocsFailCb = () => failHandler('list',res)
    const request = async() => {
        const getRes = await getManyDocs(studentCollection, undefined, getAllDocsSuccessCb, getAllDocsFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    try {
        authRequest(token, request, res)

    } catch (error) {
        res.status(400).json({ success: false, error })
    }
}

/** 
 * get many hrs from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function getManyStudents(req, res) {
    const token = req.headers.authorization
    const student = req.body.student;
    if(tokenChecker(token,res) !== true) return
    if(dataHandler(student,res,'getManyStudents') !== true) return
    const request = async() => {
        const getRes = await getManyDocs(studentCollection, student, getAllDocsSuccessCb, getAllDocsFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const getAllDocsSuccessCb = (data)=> successHandler(data,res,'list')
    const getAllDocsFailCb = () => failHandler('list',res)
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}

module.exports = {
    getStudentByUrlId,
    getStudent,
    updateStudentById,
    deleteStudentByUrlId,
    getAllStudents,
    getManyStudents,
    getGraduatesByCourseId
};