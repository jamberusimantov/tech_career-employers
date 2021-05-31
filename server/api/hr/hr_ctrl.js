const hrCollection = require('./hr_model')
const DB = require('../../utils/DB.utils')
const register = require('../../utils/register.utils')
const authRequest = require('../../utils/register.utils').authToken
const { getDoc, updateDoc, deleteDoc, filteredPrivateProps, getManyDocs, msgs } = DB
const { requiredToken, requiredQuery, unauthorizedToken, success, failure, corruptId, } = msgs
/** 
 * get all hrs from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function getAllHrs(req, res) {
    const token = req.headers.authorization
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getAllHrs')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('getAllHrs')
        })
        const getRes = await getManyDocs(hrCollection, undefined, getHrsSuccess, getHrsFail)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const getHrsSuccess = data => res.status(200).json({
        success: true,
        data: filteredPrivateProps(data),
        message: success('getAllHrs')
    })
    const getHrsFail = () => res.status(400).json({
        success: false,
        message: failure('getAllHrs')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/** 
 * get many hrs from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function getManyHrs(req, res) {
    const token = req.headers.authorization
    const hr = req.body.hr;
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getManyHrs')
    })
    if (!hr) return res.status(400).json({
        success: false,
        message: requiredQuery('getManyHrs')
    })
    const getDocSuccessCb = (data)=> successHandler(data,'got')
    const getDocFailCb = () => failHandler('list',res)
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('getManyHrs')
        })
        const getRes = await getManyDocs(hrCollection, hr, getDocSuccessCb, getDocFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    try {
        authRequest(token, request, res)
    } catch (error) {
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
    const hr = req.body.hr;
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getHr')
    })
    if (!hr) return res.status(400).json({
        success: false,
        message: requiredQuery('getHr')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('getHr')
        })
        const getRes = await getDoc(hrCollection, hr, getHrSuccess, getHrFail)
        if (getRes && getRes.error) throw new Error(getRes.error);
    }
    const getHrSuccess = data => res.status(200).json({
        success: true,
        data: filteredPrivateProps(data),
        message: success('getHr')
    })
    const getHrFail = () => res.status(400).json({
        success: false,
        message: failure('getHr')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * get hr by id from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function getHrByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    const hr = { _id }
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getHrByUrlId')
    })
    if (!Mongoose.Types.ObjectId(_id)) return res.status(400).json({
        success: false,
        message: corruptId('getHrByUrlId')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('getHrByUrlId')
        })
        const getRes = await getDoc(hrCollection, hr, getHrSuccess, getHrFail)
        if (getRes && getRes.error) throw new Error(getRes.error);
    }
    const getHrSuccess = data => res.status(200).json({
        success: true,
        data: filteredPrivateProps(data),
        message: success('getHrByUrlId')
    })
    const getHrFail = () => res.status(400).json({
        success: false,
        message: failure('getHrByUrlId')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * update hr from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateHrByUrlId(req, res) {
    const token = req.headers.authorization
    const hr = req.body.hr;
    const _id = req.params.Id;
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('updateHrByUrlId')
    })
    if (!hr) return res.status(400).json({
        success: false,
        message: requiredQuery('updateHrByUrlId')
    })
    if (!Mongoose.Types.ObjectId(_id)) return res.status(400).json({
        success: false,
        message: corruptId('updateHrByUrlId')
    })
    hr._id = _id;
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('updateHrByUrlId')
        })
        const getRes = await updateDoc(hrCollection, hr, updateHrSuccess, updateHrFail)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const updateHrSuccess = data => res.status(200).json({
        success: true,
        message: success('updateHrByUrlId')
    })
    const updateHrFail = () => res.status(400).json({
        success: false,
        message: failure('updateHrByUrlId')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/** 
 * delete hr from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function deleteHrByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    const hr = { _id }
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('deleteHrByUrlId')
    })
    if (!Mongoose.Types.ObjectId(_id)) return res.status(400).json({
        success: false,
        message: corruptId('deleteHrByUrlId')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('deleteHrByUrlId')
        })
        const getRes = await deleteDoc(hrCollection, hr, deleteHrSuccess, deleteHrFail)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const deleteHrSuccess = data => res.status(200).json({
        success: true,
        message: success('deleteHrByUrlId')
    })
    const deleteHrFail = () => res.status(400).json({
        success: false,
        message: failure('deleteHrByUrlId')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
module.exports = {
    getAllHrs,
    getManyHrs,
    getHr,
    getHrByUrlId,
    updateHrByUrlId,
    deleteHrByUrlId,
};