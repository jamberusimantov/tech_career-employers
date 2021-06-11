const hrsCollection = require('../api/hr/hr_model');
const studentsCollection = require('../api/student/student_model');
const adminCollection = require('../api/admin/admin_model');
const DB = require('../utils/DB.utils');
const { addSyntheticLeadingComment } = require('typescript');
const { getDoc } = DB;
const authRequest = async(token, cb = () => {}, res) => {
    const getDocSuccessCb = data => {cb(data)}
    const getDocFailCb = async() => await getDoc(studentsCollection, query, getDocSuccessCb, getDocFailCbInner)
    const getDocFailCbInner = async () =>await getDoc(adminCollection, query, getDocSuccessCb, ()=>{res.status(400).json({
    success : false,
    message:'token is not auth'
    })})
    const query = { token }
    if (!token) return res.status(400).json({
        success: false,
        message: 'token is required to auth'
    })
    try {
        const getRes = await getDoc(hrsCollection, query, getDocSuccessCb, getDocFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error);
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}

module.exports = {
    authRequest,
}