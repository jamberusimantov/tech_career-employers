const companyCollection = require('./company_model')
const DB = require('../../utils/DB.utils')
const authRequest = require('../../utils/register.utils').authRequest
const Mongoose = require('mongoose')
const { getDoc, updateDoc, deleteDoc, getManyDocs, msgs } = DB
const { requiredToken, requiredQuery, unauthorizedToken, success, failure, corruptId } = msgs
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
    const request = async (data) => {
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
        res.status(400).json({ success: false, error })
    } finally { }
}

/**
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
    const request = async (data) => {
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
        return { success: false, error }
    } finally { }
}
/**
 * update company from company collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateCompanyById(req, res) {
    const token = req.headers.authorization
    const company = req.body.company
    const _id = req.params.Id || company._id;
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
    const request = async (data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('updateCompanyByUrlId')
        })
        const updateRes = await updateDoc(companyCollection, company, updateCompanySuccess, updateCompanyFail)
        if (updateRes && updateRes.error) throw new Error(updateRes.error)
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
    } finally { }
}

/**
 * get company by id from company collection
 * @param {*} req 
 * @param {*} res 
 */
async function getCompanyById(req, res) {
    const token = req.headers.authorization
    const company = req.body.company || {}
    const _id = req.params.Id || company._id;
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('getCompanyByUrlId')
    })

    if (!Mongoose.Types.ObjectId(_id)) return res.status(400).json({
        success: false,
        message: corruptId('getCompanyByUrlId')
    })
    company._id = _id;
    const request = async (data) => {
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
    } finally { }
}

/** 
 * delete company from company collection
 * @param {*} req 
 * @param {*} res 
 */
async function deleteCompanyById(req, res) {
    const token = req.headers.authorization
    const company = req.body.company || {}
    const _id = req.params.Id || company._id;
    if (!token) return res.status(400).json({
        success: false,
        message: requiredToken('deleteCompanyByUrlId')
    })
    if (!Mongoose.Types.ObjectId(_id)) return res.status(400).json({
        success: false,
        message: corruptId('deleteCompanyByUrlId')
    })
    company._id = _id;
    const request = async (data) => {
        if (!data) return res.status(400).json({
            success: false,
            message: unauthorizedToken('deleteCompanyByUrlId')
        })
        const deleteRes = await deleteDoc(companyCollection, company, deleteCompanySuccess, deleteCompanyFail)
        if (deleteRes && deleteRes.error) throw new Error(deleteRes.error)
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
    } finally { }
}

module.exports = {
    getManyCompanies,
    getCompany,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById
};