const companyCollection = require('./company_model')
const jobOfferCollection = require('../jobOffer/jobOffer_model')
const DB = require('../../utils/DB.utils')
const { authToken } = require('../../utils/register.utils')
const { getDoc, updateDoc, deleteDoc, getAllDocs, getAllDocsByQuery, filteredPrivateProps, postDoc } = DB

/** 
 * get all jobOffers from jobOffer Collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateCompanyLogo(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    if (!_id) return res.status(400).json({
        success: false,
        message: 'id is required on getCompany'
    })
    if (_id.length !== 24) return res.status(400).json({
        success: false,
        message: 'corrupt id on getCompany'
    })
    const query = { _id };
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on getCompany'
    })
    const updateDocSuccessCb = data => res.status(201).json({
        success: true,
        data: filteredPrivateProps(data),
        message: ` update company: ${data._id} successfully`
    })
    const updateDocFailCb = () => res.status(400).json({
        success: false,
        message: `update company: ${_id} failed`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth'
            })
            const updateRes = await updateDoc(companyCollection, {
                logo: req.files[0].filename,
                _id: _id
            }, updateDocSuccessCb, updateDocFailCb)
            if (updateRes && updateRes.error) throw new Error(updateRes.error)
        }, res)
    } catch (error) {
        return res.status(400).json({ success: false, error })
    } finally {}
}

/** 
 * get all jobOffers from jobOffer Collection
 * @param {*} req 
 * @param {*} res 
 */
 async function getJobsByCompanyId(req, res) {
    const token = req.headers.authorization
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on getAllJobOffers'
    })
    const getAllDocsSuccessCb = data => {
        let key  = (req.params.sort ? req.params.sort : "jobDescription") ;
        let newData = data.sort((a,b) => (a[key] > b[key]) ? -1 : ((b[key] > a[key]) ? 1 : 0))
        console.log(newData);
        console.log(data);
        res.status(200).json({
            success: true,
            data: newData,
            message: 'get all company successfully'
        })
    }
    const getAllDocsFailCb = () => res.status(400).json({
        success: false,
        message: 'company list not found'
    })
    try {
        const _id = req.params.Id;
        const query = { company: _id };
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth on getAllJobOffers'
            })
            const getRes = await getAllDocsByQuery(jobOfferCollection, query, getAllDocsSuccessCb, getAllDocsFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error)
        }, res)
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error })
    } finally {}
 }

/** 
 * get all jobOffers from jobOffer Collection
 * @param {*} req 
 * @param {*} res 
 */
 async function getAllCompany(req, res) {
    const token = req.headers.authorization
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on getAllJobOffers'
    })
    const getAllDocsSuccessCb = data => res.status(200).json({
        success: true,
        data: data,
        message: 'get all company successfully'
    })
    const getAllDocsFailCb = () => res.status(400).json({
        success: false,
        message: 'company list not found'
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth on getAllJobOffers'
            })
            const getRes = await getAllDocs(companyCollection, getAllDocsSuccessCb, getAllDocsFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error)
        }, res)
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error })
    } finally {}
}

/**
 * post jobOffer to jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
 async function postCompany(req, res) {
    const token = req.headers.authorization
    const dataToPost = req.body.dataToPost
    let uploadedBy = "";
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on company'
    })

    const postDocSuccessCb = (data) => res.status(201).json({
        success: true,
        data: data,
        message: ` post company by: ${uploadedBy} successfully`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth'
            })
            const postRes = await postDoc(companyCollection, dataToPost, postDocSuccessCb)
            if (postRes && postRes.error) throw new Error(postRes.error)
        }, res)
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, err })
    } finally {}
}

/** 
 * delete jobOffer  by id from jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
 async function deleteCompanyById(req, res) {
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
        message: `delete company: ${data._id} successfully`
    })

    const deleteDocFailCb = () => res.status(400).json({
        success: false,
        message: `company: ${_id} not found`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth on deleteJobOffer '
            })
            const deleteRes = await deleteDoc(companyCollection, query, deleteDocSuccessCb, deleteDocFailCb)
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
 async function getCompanyById(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    if (!_id) return res.status(400).json({
        success: false,
        message: 'id is required on getCompany'
    })
    if (_id.length !== 24) return res.status(400).json({
        success: false,
        message: 'corrupt id on getCompany'
    })
    const query = { _id };
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on getCompany'
    })
    const getDocSuccessCb = data => res.status(200).json({
        success: true,
        data: filteredPrivateProps(data),
        message: `get  company: ${data._id} successfully`
    })
    const getDocFailCb = () => res.status(400).json({
        success: false,
        message: `company: ${_id} not found`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth on getJobOffer'
            })
            const getRes = await getDoc(companyCollection, query, getDocSuccessCb, getDocFailCb)
            if (getRes && getRes.error) throw new Error(getRes.error)
        }, res)
    } catch (error) {
        return res.status(400).json({ success: false, error })
    } finally {}
}

/**
 * update jobOffer by id to jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
 async function updateCompanyById(req, res) {
    const token = req.headers.authorization
    const dataToUpdate = req.body.dataToPost
    const _id = req.params.Id;
    if (!_id) return res.status(400).json({
        success: false,
        message: 'id is required on updateCompany'
    })
    if (_id.length !== 24) return res.status(400).json({
        success: false,
        message: 'corrupt id on updateCompany'
    })
    if (!token) return res.status(400).json({
        success: false,
        message: 'auth token is required on updateCompany'
    })
    if (!dataToUpdate) return res.status(400).json({
        success: false,
        message: 'dataToUpdate is required on updateCompany'
    })
    dataToUpdate._id = _id;
    const updateDocSuccessCb = data => res.status(201).json({
        success: true,
        data: filteredPrivateProps(data),
        message: ` update company: ${data._id} successfully`
    })
    const updateDocFailCb = () => res.status(400).json({
        success: false,
        message: `update company: ${_id} failed`
    })
    try {
        authToken(token, async(data) => {
            if (!data) return res.status(400).json({
                success: false,
                message: 'token not auth'
            })
            const updateRes = await updateDoc(companyCollection, dataToUpdate, updateDocSuccessCb, updateDocFailCb)
            if (updateRes && updateRes.error) throw new Error(updateRes.error)
        }, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}

}

module.exports = {
    postCompany,
    getAllCompany,
    deleteCompanyById,
    getCompanyById,
    getJobsByCompanyId,
    updateCompanyById,
    updateCompanyLogo
};