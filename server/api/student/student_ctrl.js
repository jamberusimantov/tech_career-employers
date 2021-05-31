const studentCollection = require('./student_model')
const DB = require('../../utils/DB.utils')
const { authToken } = require('../../utils/register.utils')
const { getDoc, updateDoc, deleteDoc, getAllDocs} = DB
const {idChecker,tokenChecker,successHandler,failHandler,queryHandler} = require('../../utils/ctrl.utils')

/**
 * Get student by id from student collection
 * @param {*} req 
 * @param {*} res 
 */
async function getStudentByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    if(idChecker(_id,res) !== true) return
    if(tokenChecker(token,res) !== true) return
    const query = { _id }
    const getDocSuccessCb = (data)=> successHandler(data,res,'got')
    const getDocFailCb = () => failHandler('user',res)
    try {
        authToken(token, async() => {
            const getRes = await getDoc(studentCollection, query, getDocSuccessCb, getDocFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error);
        }, res)
    } catch (err) {
        res.status(400).json({ success: false, error })
    } 
}
/**
 * get student from student collection
 * @param {*} req 
 * @param {*} res 
 */
async function getStudent(req, res) {
    const token = req.headers.authorization
    const query = req.body?.user;
    if(queryHandler(query,res) !== true) return
    const {email}  = query
    if(tokenChecker(token,res) !== true) return
    const getDocSuccessCb = (data)=> successHandler(data,res,'got')
    const getDocFailCb = () => failHandler(email,res)
    try {
        authToken(token, async() => {
            const getRes = await getDoc(studentCollection, query, getDocSuccessCb, getDocFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error);
        }, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
}
/**
 * update student from student collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateStudentById(req, res) {
    const token = req.headers.authorization
    const query = req.body.user;
    const { _id } = query;
    if(idChecker(_id,res) !== true) return
    if(tokenChecker(token,res) !== true) return
    const updateDocSuccessCb = (data)=> successHandler(data,res,'updated')
    const updateDocFailCb = () => failHandler(_id,res)
    try {
        authToken(token, async() => {
            const getRes = await updateDoc(studentCollection, query, updateDocSuccessCb, updateDocFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error)
        }, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } 
}
/** 
 * delete student from student collection
 * @param {*} req 
 * @param {*} res 
 */
async function deleteStudentById(req, res) {
    const token = req.headers.authorization
    const query = req.body.user;
    const { _id } = query;
    if(idChecker(_id,res) !== true) return
    if(tokenChecker(token,res) !== true) return
    const deleteDocSuccessCb = (data)=> successHandler(data,res,'deleted')
    const deleteDocFailCb = () => failHandler(_id,res)
       try {
        authToken(token, async() => {
            const getRes = await deleteDoc(studentCollection, query, deleteDocSuccessCb, deleteDocFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error)
        }, res)
    } catch (err) {
        res.status(400).json({ success: false, error: err })
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
    try {
        authToken(token, async() => {
            const getRes = await getAllDocs(studentCollection, getAllDocsSuccessCb, getAllDocsFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error)
        }, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
}

module.exports = {
    getStudentByUrlId,
    getStudent,
    updateStudentById,
    deleteStudentById,
    getAllStudents
};