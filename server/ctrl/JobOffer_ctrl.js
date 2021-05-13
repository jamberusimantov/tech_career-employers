const jobOfferCollection = require('../models/jobOffer_model')

/** 
 * get all jobOffers from jobOffer Collection
 * @param {*} req 
 * @param {*} res 
 */
async function getAllJobOffers(req, res) {
    try {
        await jobOfferCollection.find((err, jobOfferArray) => {
            err ? res.status(400).json({ success: false, error: err }) :
                !jobOfferArray ? res.status(404).json({ success: false, message: 'jobOffers not found' }) :
                !(jobOfferArray.length > 0) ?
                res.status(400).json({ success: false, data: [], message: ':( no jobOffers to display' }) :
                res.status(200).json({ success: true, data: jobOfferArray, message: 'get jobOffers successfully' })
        })
    } catch (err) { console.error(err) } finally {}
}
/** 
 * delete jobOffer  by id from jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
async function deleteJobOffer(req, res) {
    const id = req.params.Id;
    try {
        if (id.length === 24) {
            await jobOfferCollection.findByIdAndRemove(id, (err, hr) => {
                err ? res.status(400).json({ success: false, error: err }) :
                    !hr ? res.status(404).json({ success: false, message: 'jobOffer not found' }) :
                    res.status(200).json({ success: true, data: hr, message: 'delete jobOffer successfully' })
            })
        }
    } catch (err) { console.error(err) } finally {}
}
/**
 * get jobOffer by id from jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
async function getJobOffer(req, res) {
    const id = req.params.Id;
    try {
        if (id.length === 24) {
            await jobOfferCollection.findById(id, (err, jobOffer) => {
                err ? res.status(400).json({ success: false, error: err }) :
                    !jobOffer ? res.status(404).json({ success: false, message: 'jobOffer not found' }) :
                    res.status(200).json({ success: true, data: jobOffer, message: 'get jobOffer successfully' })
            })
        }
    } catch (err) { console.error(err) } finally {}
}
/**
 * post jobOffer to jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
async function postJobOffer(req, res) {
    const dataToPost = req.body.dataToPost
    try {
        await jobOfferCollection.insertMany(dataToPost, (err) => {
            err ? res.status(400).json({ success: false, error: err }) :
                res.status(200).json({
                    success: true,
                    message: `job offer uploaded to DB successfully`
                })
        })
    } catch (err) { console.error(err) } finally {}
}
/**
 * update jobOffer by id to jobOffer collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateJobOffer(req, res) {
    const id = req.params.Id;
    const dataToUpdate = req.body.dataToUpdate
    try {
        if (id.length === 24) {
            await jobOfferCollection.findByIdAndUpdate(id, dataToUpdate, (err, jobOffer) => {
                err ? res.status(400).json({ success: false, error: err }) :
                    !jobOffer ? res.status(404).json({ success: false, message: 'jobOffer not found' }) :
                    res.status(200).json({ success: true, data: jobOffer, message: 'update jobOffer successfully' })
            })
        }
    } catch (err) { console.error(err) } finally {}
}


module.exports = {
    getAllJobOffers,
    getJobOffer,
    postJobOffer,
    updateJobOffer,
    deleteJobOffer
}