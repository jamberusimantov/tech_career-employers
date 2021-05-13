const hrCollection = require('../models/hr_model')

/**
 * get hr by id from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function getHrById(req, res) {
    try {
        const hrId = req.params.Id;
        if (hrId.length === 24) {
            await hrCollection.findById(hrId, (err, hr) => {
                err ? res.status(400).json({ success: false, error: err }) :
                    !hr ? res.status(404).json({ success: false, message: 'hr not found' }) :
                    res.status(200).json({ success: true, data: hr, message: 'get user successfully' })
            })
        }
    } catch (err) { console.error(err) } finally {}
}
/**
 * get hr from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function getHr(req, res) {
    const email = req.body.user.email;
    try {
        await hrCollection.findOne({ email }, (err, hr) => {
            err ? res.status(400).json({ success: false, error: err }) :
                !hr ? res.status(404).json({ success: false, message: 'hr not found' }) :
                res.status(200).json({ success: true, data: hr, message: 'get user successfully' })
        })
    } catch (err) { console.error(err) } finally {}
}
/**
 * update hr from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateHr(req, res) {
    const dataToUpdate = req.body.user;
    const email = dataToUpdate.email;
    try {
        await hrCollection.findOneAndUpdate({ email }, dataToUpdate, (err, hr) => {
            err ? res.status(400).json({ success: false, error: err }) :
                !hr ? res.status(404).json({ success: false, message: 'hr not found' }) :
                res.status(200).json({ success: true, data: hr, message: 'update user successfully' })
        })
    } catch (err) { console.error(err) } finally {}
}
/** 
 * delete hr from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function deleteHr(req, res) {
    const email = req.body.user.email;
    try {
        await hrCollection.findOneAndRemove({ email }, (err, hr) => {
            err ? res.status(400).json({ success: false, error: err }) :
                !hr ? res.status(404).json({ success: false, message: 'hr not found' }) :
                res.status(200).json({ success: true, data: hr, message: 'delete user successfully' })
        })
    } catch (err) { console.error(err) } finally {}
}
/** 
 * get all hrs from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function getAllHrs(req, res) {
    try {
        await hrCollection.find((err, hrArray) => {
            err ? res.status(400).json({ success: false, error: err }) :
                !hrArray ? res.status(404).json({ success: false, message: 'hr Array not found' }) :
                !(hrArray.length > 0) ?
                res.status(400).json({ success: false, data: [], message: ':( no hrs to display' }) :
                res.status(200).json({ success: true, data: hrArray, message: 'get hrArray successfully' })
        })
    } catch (err) { console.error(err) } finally {}
}

module.exports = {
    getHrById,
    getHr,
    updateHr,
    deleteHr,
    getAllHrs
};