const hrCollection = require('./hr_model')
const DB = require('../../utils/DB.utils')
const { authToken } = require('../../utils/register.utils')
const { getDoc, updateDoc, deleteDoc, getAllDocs, filteredPrivateProps } = DB

/**
 * get hr by id from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function getHrByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    if (!_id) return res.status(400).json({
        success: false,
        message: 'id is required on getHrById'
    })
    if (_id.length !== 24) return res.status(400).json({
        success: false,
        message: 'corrupt id on getHrById'
    })
    const query = { _id };
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on getHrById'
    })
    const getDocSuccessCb = data => res.status(200).json({
        success: true,
        data: filteredPrivateProps(data),
        message: `get hr: ${data._id} successfully`
    })
    const getDocFailCb = () => res.status(400).json({
        success: false,
        message: `hr: ${_id} not found`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth on getHrById'
            })
            const getRes = await getDoc(hrCollection, query, getDocSuccessCb, getDocFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error);
        }, res)
    } catch (err) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * get hr from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function getHr(req, res) {
    const token = req.headers.authorization
    const query = req.body.user;
    const { email } = query
    if (!query) return res.status(400).json({
        success: false,
        message: 'query data is required on getHr'
    })
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on getHr'
    })
    const getDocSuccessCb = data => res.status(200).json({
        success: true,
        data: filteredPrivateProps(data),
        message: `get hr: ${data.email} successfully`
    })
    const getDocFailCb = () => res.status(400).json({
        success: false,
        message: `hr: ${email} not found`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth on getHr'
            })
            const getRes = await getDoc(hrCollection, query, getDocSuccessCb, getDocFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error);
        }, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * update hr from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateHrById(req, res) {
    const token = req.headers.authorization
    const query = req.body.user;
    const { _id } = query;
    if (!_id) return res.status(400).json({
        success: false,
        message: 'id is required on getHrById'
    })
    if (_id.length !== 24) return res.status(400).json({
        success: false,
        message: 'corrupt id on getHrById'
    })
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on updateHr'
    })
    const updateDocSuccessCb = data => res.status(200).json({
        success: true,
        message: `update hr: ${data.email} successfully`
    })
    const updateDocFailCb = () => res.status(400).json({
        success: false,
        message: `hr: ${email} not found`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth'
            })
            const getRes = await updateDoc(hrCollection, query, updateDocSuccessCb, updateDocFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error)
        }, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/** 
 * delete hr from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function deleteHrById(req, res) {
    const token = req.headers.authorization
    const query = req.body.user;
    const { _id } = query;
    if (!_id) return res.status(400).json({
        success: false,
        message: 'id is required on getHrById'
    })
    if (_id.length !== 24) return res.status(400).json({
        success: false,
        message: 'corrupt id on getHrById'
    })
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on getJobOffer'
    })
    const deleteDocSuccessCb = data => res.status(200).json({
        success: true,
        message: `delete hr: ${data.email} successfully`
    })
    const deleteDocFailCb = () => res.status(400).json({
        success: false,
        message: `hr: ${email} not found`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth'
            })
            const getRes = await deleteDoc(hrCollection, query, deleteDocSuccessCb, deleteDocFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error)
        }, res)
    } catch (err) {
        res.status(400).json({ success: false, error: err })
    } finally {}
}
/** 
 * get all hrs from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function getAllHrs(req, res) {
    const token = req.headers.authorization
    const getAllDocsSuccessCb = data => res.status(200).json({
        success: true,
        data: filteredPrivateProps(data),
        message: 'get all hrs successfully'
    })
    const getAllDocsFailCb = () => res.status(400).json({
        success: false,
        message: 'hr list not found'
    })
    try {
        if (!token) return res.status(400).json({
            success: false,
            message: 'auth token is required'
        })
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth'
            })
            const getRes = await getAllDocs(hrCollection, getAllDocsSuccessCb, getAllDocsFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error)
        }, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}

module.exports = {
    getHrByUrlId,
    getHr,
    updateHrById,
    deleteHrById,
    getAllHrs
};