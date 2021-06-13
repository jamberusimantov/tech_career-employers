const adminCollection = require('./admin_model')
const DB = require('../../utils/DB.utils')
const register = require('../../utils/register.utils')
const {authRequest} = register
const { getDoc, updateDoc, deleteDoc, getManyDocs, msgs } = DB
const {idChecker,tokenChecker,successHandler,failHandler,queryHandler,dataHandler} = require('../../utils/ctrl.utils')

/**
 * Get admin by id from admin collection
 * @param {*} req 
 * @param {*} res 
 */
async function getAdminByUrlId(req, res) {
    
    const token = req.headers.authorization
    const _id = req.params.Id;
    const admin = { _id }
    if(idChecker(_id,res) !== true) return
    if(tokenChecker(token,res) !== true) return
    const getDocSuccessCb = (data)=> successHandler(data,res,'got')
    const getDocFailCb = () => failHandler(_id,res)
    const request = async() => {
        const getRes = await getDoc(adminCollection, admin, getDocSuccessCb, getDocFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error);
    }
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * get admin from admin collection
 * @param {*} req 
 * @param {*} res 
 */
async function getAdmin(req, res) {
    const token = req.headers.authorization
    const admin = req.body.admin;
    if(tokenChecker(token,res) !== true) return
    if(dataHandler(admin,res) !== true) return
    const getDocSuccessCb = (data)=> successHandler(data,res,'got')
    const getDocFailCb = () => failHandler('admin',res)
    const request = async() => {
        const getRes = await getDoc(adminCollection, admin, getDocSuccessCb, getDocFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error);
    }
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * update admin from admin collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateAdminById(req, res) {
    const token = req.headers.authorization
    const admin = req.body.admin;
    const _id = req.params.Id;
    if(tokenChecker(token,res) !== true) return
    if(idChecker(_id,res) !== true) return
    admin._id = _id;
    const updateDocSuccessCb = (data)=> successHandler(data,res,'updated')
    const updateDocFailCb = () => failHandler(_id,res)
    const request = async(data) => {
        const getRes = await updateDoc(adminCollection, admin, updateDocSuccessCb, updateDocFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/** 
 * delete admin from admin collection
 * @param {*} req 
 * @param {*} res 
 */
 async function deleteAdminByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    const admin = { _id }
    if(idChecker(_id,res) !== true) return
    if(tokenChecker(token,res) !== true) return
    const request = async(data) => {
        const getRes = await deleteDoc(adminCollection, admin, deleteDocSuccessCb, deleteDocFailCb)
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
 * get all admins from admin collection
 * @param {*} req 
 * @param {*} res 
 */
async function getAllAdmins(req, res) {
    const token = req.headers.authorization
    if(tokenChecker(token,res) !== true) return
    const getAllDocsSuccessCb = (data)=> successHandler(data,res,'list')
    const getAllDocsFailCb = () => failHandler('list',res)
    const request = async(data) => {
        const getRes = await getManyDocs(adminCollection, undefined, getAllDocsSuccessCb, getAllDocsFailCb)
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
async function getManyAdmins(req, res) {
    const token = req.headers.authorization
    const admin = req.body.admin;
    if(tokenChecker(token,res) !== true) return
    if(dataHandler(admin,res,'getManyAdmin') !== true) return
    const request = async() => {
        const getRes = await getManyDocs(adminCollection, admin, getAllDocsSuccessCb, getAllDocsFailCb)
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
    getAdminByUrlId,
    getAdmin,
    updateAdminById,
    deleteAdminByUrlId,
    getAllAdmins,
    getManyAdmins
};