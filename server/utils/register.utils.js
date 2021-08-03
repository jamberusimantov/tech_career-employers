const hrsCollection = require('../api/hr/hr_model');
const studentsCollection = require('../api/student/student_model');
const adminCollection = require('../api/admin/admin_model');
const DB = require('../utils/DB.utils');
const { getDoc } = DB;

const authRequest = async(token, cb = (data) => {}, res) => {
    try {
        if (!token) return res.status(400).json({
            success: false,
            message: 'token is required to auth'
        })
        const query = { token };
        const getDocSuccessCb = data => {
            cb(data);
        }
        const getDocFailCb = async() => {
            return await getDoc(adminCollection, query, getDocSuccessCb, getDocFailCbInner)
        }

        const getDocFailCbInner = async() => {
            await getDoc(studentsCollection, query, getDocSuccessCb, () => {
                res.status(400).json({
                    success: false,
                    message: 'token is not auth'
                })
            })
        }
        const getRes = await getDoc(hrsCollection, query, getDocSuccessCb, getDocFailCb)
        if (getRes && getRes.error) throw 'error';
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}

module.exports = {
    authRequest,
}