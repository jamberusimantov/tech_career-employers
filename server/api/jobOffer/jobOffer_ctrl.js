const jobOfferCollection = require('./jobOffer_model')
const DB = require('../../utils/DB.utils')
const mongoose = require('mongoose')
const authRequest = require('../../utils/register.utils').authToken
const { getDoc, updateDoc, deleteDoc, postDocs, getManyDocs, msgs } = DB
const { requiredToken, requiredQuery, unauthorizedToken, success, failure, corruptId } = msgs

async function getManyJobOffers(req, res) {
    const token = req.headers.authorization
    const jobOffer = req.body.jobOffer
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getManyJobOffers')
    })
    if (!jobOffer) return res.status(400).json({
        success: false,
        message: requiredQuery('getManyJobOffers')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('getManyJobOffers')
        })
        const getRes = await getManyDocs(jobOfferCollection, jobOffer, getJobOffersSuccess, getJobOffersFail)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const getJobOffersSuccess = data => res.status(200).json({
        success: true,
        data: data,
        message: success('getManyJobOffers')
    })
    const getJobOffersFail = () => res.status(400).json({
        success: false,
        message: failure('getManyJobOffers')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * get jobOffer from jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
async function getJobOffer(req, res) {
    const token = req.headers.authorization
    const jobOffer = req.body.jobOffer
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getJobOffer')
    })
    if (!jobOffer) return res.status(400).json({
        success: false,
        message: requiredQuery('getJobOffer')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('getJobOffer')
        })
        const getRes = await getDoc(jobOfferCollection, jobOffer, getJobOfferSuccess, getJobOfferFail)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const getJobOfferSuccess = data => res.status(200).json({
        success: true,
        data: data,
        message: success('getJobOffer')
    })
    const getJobOfferFail = () => res.status(400).json({
        success: false,
        message: failure('getJobOffer')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        return res.status(400).json({ success: false, error })
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
    const jobOffer = { _id }
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getJobOfferByUrlId')
    })
    if (!mongoose.Types.ObjectId(_id)) return res.status(400).json({
        success: false,
        message: corruptId('getJobOfferByUrlId')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('getJobOfferByUrlId')
        })
        const getRes = await getDoc(jobOfferCollection, jobOffer, getJobOfferSuccess, getJobOfferFail)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const getJobOfferSuccess = data => res.status(200).json({
        success: true,
        data: filteredPrivateProps(data),
        message: success('getJobOfferByUrlId')
    })
    const getJobOfferFail = () => res.status(400).json({
        success: false,
        message: failure('getJobOfferByUrlId')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        return res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * update jobOffer by id to jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateJobOfferByUrlId(req, res) {
    const token = req.headers.authorization
    const jobOffer = req.body.jobOffer
    const _id = req.params.Id;
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('updateJobOfferByUrlId')
    })
    if (!jobOffer) return res.status(400).json({
        success: false,
        message: requiredQuery('updateJobOfferByUrlId')
    })
    if (!mongoose.Types.ObjectId(_id)) return res.status(400).json({
        success: false,
        message: corruptId('updateJobOfferByUrlId')
    })
    company._id = _id;
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('updateJobOfferByUrlId')
        })
        const updateRes = await updateDoc(jobOfferCollection, dataToUpdate, updateJobOfferSuccess, updateJobOfferFail)
        if (updateRes && updateRes.error) throw new Error(updateRes.error)
    }
    const updateJobOfferSuccess = data => res.status(201).json({
        success: true,
        data: filteredPrivateProps(data),
        message: success('updateJobOfferByUrlId')
    })
    const updateJobOfferFail = () => res.status(400).json({
        success: false,
        message: failure('updateJobOfferByUrlId')
    })
    try {
        authToken(token, request, res)
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
    const jobOffer = { _id };
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('deleteJobOfferByUrlId')
    })
    if (!mongoose.Types.ObjectId(_id)) return res.status(400).json({
        success: false,
        message: corruptId('deleteJobOfferByUrlId')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('deleteJobOfferByUrlId')
        })
        const deleteRes = await deleteDoc(jobOfferCollection, jobOffer, deleteJobOfferSuccess, deleteJobOfferFail)
        if (deleteRes && deleteRes.error) throw new Error(deleteRes.error)
    }
    const deleteJobOfferSuccess = data => res.status(200).json({
        success: true,
        message: success('deleteJobOfferByUrlId')
    })

    const deleteJobOfferFail = () => res.status(400).json({
        success: false,
        message: failure('deleteJobOfferByUrlId')
    })
    try {
        authRequest(token, request, res)
    } catch (err) {
        res.status(400).json({ success: false, error: err })
    } finally {}
}
/**
 * post jobOffer to jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
async function postJobOffer(req, res) {
    const token = req.headers.authorization
    const jobOffer = req.body.jobOffer
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on postJobOffer'
    })
    if (!jobOffer) return res.status(400).json({
        success: false,
        message: 'query data is required on postJobOffer'
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: 'token not auth on postJobOffer'
        })
        const postRes = await postDocs(jobOfferCollection, jobOffer, postJobOfferSuccess)
        if (postRes && postRes.error) throw new Error(postRes.error)
    }
    const postJobOfferSuccess = () => res.status(201).json({
        success: true,
        message: ` post JobOffer by: ${JobOffer.uploadedBy} successfully`
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}

module.exports = {
    getManyJobOffers,
    getJobOffer,
    getJobOfferByUrlId,
    updateJobOfferByUrlId,
    deleteJobOfferByUrlId,
    postJobOffer,
}