const jobOfferCollection = require('./jobOffer_model')
const DB = require('../../utils/DB.utils')
const { authToken } = require('../../utils/register.utils')
const { getDoc, postDoc, updateDoc, deleteDoc, getAllDocs, filteredPrivateProps } = DB
/** 
 * get all jobOffers from jobOffer Collection
 * @param {*} req 
 * @param {*} res 
 */
async function getAllJobOffers(req, res) {
    const token = req.headers.authorization
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on getAllJobOffers'
    })
    const getAllDocsSuccessCb = data => res.status(200).json({
        success: true,
        data: filteredPrivateProps(data),
        message: 'get all jobOffers successfully'
    })
    const getAllDocsFailCb = () => res.status(400).json({
        success: false,
        message: 'jobOffers list not found'
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth on getAllJobOffers'
            })
            const getRes = await getAllDocs(jobOfferCollection, getAllDocsSuccessCb, getAllDocsFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error)
        }, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/** 
 * delete jobOffer  by id from jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
async function deleteJobOfferByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    if (!_id) return res.status(400).json({
        success: false,
        message: 'id is required on deleteJobOffer'
    })
    if (_id.length !== 24) return res.status(400).json({
        success: false,
        message: 'corrupt id on deleteJobOffer'
    })
    const query = { _id };
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on deleteJobOffer'
    })
    const deleteDocSuccessCb = data => res.status(200).json({
        success: true,
        message: `delete jobOffer: ${data._id} successfully`
    })

    const deleteDocFailCb = () => res.status(400).json({
        success: false,
        message: `jobOffer: ${_id} not found`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth on deleteJobOffer '
            })
            const deleteRes = await deleteDoc(jobOfferCollection, query, deleteDocSuccessCb, deleteDocFailCb)
            if (deleteRes && deleteRes.error) throw new Error(deleteRes.error)
        }, res)
    } catch (err) {
        res.status(400).json({ success: false, error: err })
    } finally {}

}
/**
 * get jobOffer by id from jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
async function getJobOfferByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    if (!_id) return res.status(400).json({
        success: false,
        message: 'id is required on getJobOffer'
    })
    if (_id.length !== 24) return res.status(400).json({
        success: false,
        message: 'corrupt id on getJobOffer'
    })
    const query = { _id };
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on getJobOffer'
    })
    const getDocSuccessCb = data => res.status(200).json({
        success: true,
        data: filteredPrivateProps(data),
        message: `get  jobOffer: ${data._id} successfully`
    })
    const getDocFailCb = () => res.status(400).json({
        success: false,
        message: `jobOffer: ${_id} not found`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth on getJobOffer'
            })
            const getRes = await getDoc(jobOfferCollection, query, getDocSuccessCb, getDocFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error)
        }, res)
    } catch (error) {
        return res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * post jobOffer to jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
async function postJobOffer(req, res) {
    const token = req.headers.authorization
    const dataToPost = req.body.dataToPost
    const { uploadedBy } = dataToPost
    if (!uploadedBy) return res.status(400).json({
        success: false,
        message: 'uploadedBy is required on postJobOffer'
    })
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on postJobOffer'
    })
    const postDocSuccessCb = () => res.status(201).json({
        success: true,
        message: ` post JobOffer by: ${uploadedBy} successfully`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth'
            })
            const postRes = await postDoc(jobOfferCollection, dataToPost, postDocSuccessCb)
            if (postRes && postRes.error) throw new Error(postRes.error)
        }, res)
    } catch (err) {
        res.status(400).json({ success: false, error })
    } finally {}



}
/**
 * update jobOffer by id to jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateJobOfferByUrlId(req, res) {
    const token = req.headers.authorization
    const dataToUpdate = req.body.dataToUpdate
    const _id = req.params.Id;
    if (!_id) return res.status(400).json({
        success: false,
        message: 'id is required on updateJobOffer'
    })
    if (_id.length !== 24) return res.status(400).json({
        success: false,
        message: 'corrupt id on updateJobOffer'
    })
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on updateJobOffer'
    })
    if (!dataToUpdate) return res.status(400).json({
        success: false,
        message: 'dataToUpdate is required on updateJobOffer'
    })
    dataToUpdate._id = _id;
    const updateDocSuccessCb = data => res.status(201).json({
        success: true,
        data: filteredPrivateProps(data),
        message: ` update jobOffer: ${data._id} successfully`
    })
    const updateDocFailCb = () => res.status(400).json({
        success: false,
        message: `update jobOffer: ${_id} failed`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth'
            })
            const updateRes = await updateDoc(jobOfferCollection, dataToUpdate, updateDocSuccessCb, updateDocFailCb)
            if (updateRes && updateRes.error) throw new Error(updateRes.error)
        }, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}

}
module.exports = {
    getAllJobOffers,
    getJobOfferByUrlId,
    postJobOffer,
    updateJobOfferByUrlId,
    deleteJobOfferByUrlId
}