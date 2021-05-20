const hrsCollection = require('../api/hr/hr_model');
const studentsCollection = require('../api/student/student_model');
const DB = require('../utils/DB.utils');
const { getDoc } = DB;
const authToken = async(token, cb = () => {}, res) => {
    const getDocSuccessCb = data => cb(data);
    const getDocSuccessCbInner = getDocSuccessCb
    const getDocFailCb = async() => await getDoc(studentsCollection, query, getDocSuccessCbInner, getDocFailCbInner)
    const getDocFailCbInner = () => res.status(400).json({
        success: false,
        message: 'token is not auth'
    })
    const query = { token }
    if (!token) return res.status(400).json({
        success: false,
        message: 'token is required to auth'
    })
    try {
        const getRes = await getDoc(hrsCollection, query, getDocSuccessCb, getDocFailCb)
        if (getRes && getRes.error) throw new Error(getRes.error);
    } catch (error) {
        return res.status(400).json({ success: false, error })
    } finally {}
}

module.exports = {
    authToken,
}