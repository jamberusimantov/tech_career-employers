const studentCollection = require('../models/auth_student_model')


/** 
 * get all students from student collection
 * @param {*} req 
 * @param {*} res 
 */
 async function getAllStudents(req, res) {
    try {
        await studentCollection.find((err, studentArray) => {
                err ? res.status(400).json({ success: false, error: err }) :
                !studentArray ? res.status(404).json({ success: false, message: 'student Array not found' }) :
                !(studentArray.length > 0) ? res.status(400).json({ success: false, data: [], message: ':( no students to display' }) :
                res.status(200).json({ success: true, data: studentArray, message: 'get studentArray successfully' })
        })
    } catch (err) { console.error(err) } finally {}
}

/**
 * get student by id from student collection
 * @param {*} req 
 * @param {*} res 
 */
async function getStudentById(req, res) {
    try {
        const studentId = req.params.Id;
        if (studentId.length === 24) {
            await studentCollection.findById(studentId, (err, student) => {
                err ? res.status(400).json({ success: false, error: err }) :
                    !student ? res.status(404).json({ success: false, message: 'student not found' }) :
                    res.status(200).json({ success: true, data: student, message: 'get student successfully' })
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


module.exports = {
    getHrById,
    getHr,
    updateHr,
    deleteHr,
    getAllHrs
};