const companyCollection = require('./company_model')
<<<<<<< HEAD
const jobOfferCollection = require('../jobOffer/jobOffer_model')
const DB = require('../../utils/DB.utils')
const { authToken } = require('../../utils/register.utils')
const { getDoc, updateDoc, deleteDoc, getAllDocs, getAllDocsByQuery, filteredPrivateProps, postDoc } = DB

/** 
 * Update Company Logo
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
 * get jobs by company id
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
 * get all companies
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
=======
const DB = require('../../utils/DB.utils')
const authRequest = require('../../utils/register.utils').authToken
const Mongoose = require('mongoose')
const { getDoc, updateDoc, deleteDoc, postDocs, getManyDocs, msgs } = DB
const { requiredToken, requiredQuery, unauthorizedToken, success, failure, corruptId } = msgs
/** 
 * get all companies from company collection
 * @param {*} req 
 * @param {*} res 
 */
async function getAllCompanies(req, res) {
    const token = req.headers.authorization
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getAllCompanies')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('getAllCompanies')
        })
        const getRes = await getManyDocs(companyCollection, undefined, getCompaniesSuccess, getCompaniesFail)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const getCompaniesSuccess = data => res.status(200).json({
        success: true,
        data: data,
        message: success('getAllCompanies')
    })
    const getCompaniesFail = () => res.status(400).json({
        success: false,
        message: failure('getAllCompanies')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/** 
 * get many companies from company collection
 * @param {*} req 
 * @param {*} res 
 */
async function getManyCompanies(req, res) {
    const token = req.headers.authorization
    const company = req.body.company
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getManyCompanies')
    })
    if (!company) return res.status(400).json({
        success: false,
        message: requiredQuery('postCompany')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('getManyCompanies')
        })
        const getRes = await getManyDocs(companyCollection, company, getCompaniesSuccess, getCompaniesFail)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const getCompaniesSuccess = data => res.status(200).json({
        success: true,
        data: data,
        message: success('getManyCompanies')
    })
    const getCompaniesFail = () => res.status(400).json({
        success: false,
        message: failure('getManyCompanies')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
>>>>>>> d0f8f22a1042fb1baf21a895996fc069eed221d8
        res.status(400).json({ success: false, error })
    } finally {}
}

/**
<<<<<<< HEAD
 * post add company
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
 * delete company by id
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
 * get company by id
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
 * update company by id
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
=======
 * get company from company collection
 * @param {*} req 
 * @param {*} res 
 */
async function getCompany(req, res) {
    const token = req.headers.authorization
    const company = req.body.company
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getCompany')
    })
    if (!company) return res.status(400).json({
        success: false,
        message: requiredQuery('getCompany')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('getCompany')
        })
        const getRes = await getDoc(companyCollection, company, getCompanySuccess, getCompanyFail)
        if (getRes && getRes.error) throw new Error(getRes.error);
    }
    const getCompanySuccess = data => res.status(200).json({
        success: true,
        data: data,
        message: success('getCompany')
    })
    const getCompanyFail = () => res.status(400).json({
        success: false,
        message: failure('getCompany')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * get company by id from company collection
 * @param {*} req 
 * @param {*} res 
 */
async function getCompanyByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    const company = { _id }
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getCompanyByUrlId')
    })
    if (!Mongoose.Types.ObjectId(_id)) return res.status(400).json({
        success: false,
        message: corruptId('getCompanyByUrlId')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('getCompanyByUrlId')
        })
        const getRes = await getDoc(companyCollection, company, getCompanySuccess, getCompanyFail)
        if (getRes && getRes.error) throw new Error(getRes.error);
    }
    const getCompanySuccess = data => res.status(200).json({
        success: true,
        data: data,
        message: success('getCompanyByUrlId')
    })
    const getCompanyFail = () => res.status(400).json({
        success: false,
        message: failure('getCompanyByUrlId')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/**
 * update company from company collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateCompanyByUrlId(req, res) {
    const token = req.headers.authorization
    const company = req.body.company
    const _id = req.params.Id;
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('updateCompanyByUrlId')
    })
    if (!company) return res.status(400).json({
        success: false,
        message: requiredQuery('updateCompanyByUrlId')
    })
    if (!Mongoose.Types.ObjectId(_id)) return res.status(400).json({
        success: false,
        message: corruptId('updateCompanyByUrlId')
    })
    company._id = _id;
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('updateCompanyByUrlId')
        })
        const getRes = await postDocs(companyCollection, company, updateCompanySuccess, updateCompanyFail)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const updateCompanySuccess = data => res.status(200).json({
        success: true,
        message: success('updateCompanyByUrlId')
    })
    const updateCompanyFail = () => res.status(400).json({
        success: false,
        message: failure('updateCompanyByUrlId')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/** 
 * delete company from company collection
 * @param {*} req 
 * @param {*} res 
 */
async function deleteCompanyByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    const company = { _id };
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('deleteCompanyByUrlId')
    })
    if (!Mongoose.Types.ObjectId(_id)) return res.status(400).json({
        success: false,
        message: corruptId('deleteCompanyByUrlId')
    })
    const request = async(data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('deleteCompanyByUrlId')
        })
        const getRes = await deleteDoc(companyCollection, company, deleteCompanySuccess, deleteCompanyFail)
        if (getRes && getRes.error) throw new Error(getRes.error)
    }
    const deleteCompanySuccess = data => res.status(200).json({
        success: true,
        message: success('deleteCompanyByUrlId')
    })
    const deleteCompanyFail = () => res.status(400).json({
        success: false,
        message: failure('deleteCompanyByUrlId')
    })
    try {
        authRequest(token, request, res)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}

module.exports = {
    getAllCompanies,
    getManyCompanies,
    getCompany,
    getCompanyByUrlId,
    updateCompanyByUrlId,
    deleteCompanyByUrlId
>>>>>>> d0f8f22a1042fb1baf21a895996fc069eed221d8
};