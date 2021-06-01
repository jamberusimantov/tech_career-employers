const studentCollection = require('./student_model')
const DB = require('../../utils/DB.utils')
const register = require('../../utils/register.utils')
const {authRequest} = register
const { getDoc, updateDoc, deleteDoc, getManyDocs, msgs } = DB
const {idChecker,tokenChecker,successHandler,failHandler,queryHandler,dataHandler} = require('../../utils/ctrl.utils')


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
 async function deleteStudentByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    const student = { _id }
    if(idChecker(_id,res) !== true) return
    if(tokenChecker(token,res) !== true) return
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('deleteHrByUrlId')
        })
        const getRes = await deleteDoc(studentCollection, student, deleteDocSuccessCb, deleteDocFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const deleteDocSuccessCb = (data)=> successHandler(data,res,'deleted')
    const deleteDocFailCb = () => failHandler(_id,res)
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
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
    const request = async(data) => {
        if  (dataHandler(data,res) !== true) return
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
    studentCollection.drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        return res.send({success:true})
    })
    if(tokenChecker(token,res) !== true) return
    if(dataHandler(student,res,'getAllHrs') !== true) return
    const request = async(data) => {
        if  (dataHandler(data,res) !== true) return
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
    getManyStudents
};