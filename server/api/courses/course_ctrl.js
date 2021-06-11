const courseCollection = require('./course_model')
const DB = require('../../utils/DB.utils')
const register = require('../../utils/register.utils')
const {authRequest} = register
const { getDoc, updateDoc, deleteDoc, getManyDocs, msgs } = DB
const {idChecker,tokenChecker,successHandler,failHandler,queryHandler,dataHandler} = require('../../utils/ctrl.utils')


/**
 * update course from courses collection
 * @param {*} req 
 * @param {*} res 
 */
async function updateCourseByUrlId(req, res) {
    const token = req.headers.authorization
    const course = req.body.course;
    const _id = req.params.Id;
    if(tokenChecker(token,res) !== true) return
    if(idChecker(_id,res) !== true) return 
    course._id = _id;
    try {
        await courseCollection.findOneAndUpdate(_id, course, async(error, docFromDb) => {
            if (error) throw new Error(`error on updateDoc: ${error}`);
            return res.status(200).json({success:true,data:docFromDb})
        })
    } catch (error) {
        return { success: false, error };
    }
}
/** 
 * delete student from student collection
 * @param {*} req 
 * @param {*} res 
 */
 async function deleteCourseByUrlId(req, res) {
    const token = req.headers.authorization
    const _id = req.params.Id;
    if(idChecker(_id,res) !== true) return
    if(tokenChecker(token,res) !== true) return
    try {
        await courseCollection.findOneAndRemove(_id, (error, docFromDb) => {
            if (error) throw new Error(`error on deleteDoc: ${error}`);
            return res.status(200).json({success:true,data:docFromDb})
        })
    } catch (error) {
        return { success: false, error };
    } 
}
/** 
 * get all courses from course collection
 * @param {*} req 
 * @param {*} res 
 */
async function getAllCourses(req, res) {
    const token = req.headers.authorization
    if(tokenChecker(token,res) !== true) return
        try {
            await courseCollection.find((err,courses)=>{
                if (err) throw new Error(`error on get all courses: ${error}`);
                return res.status(200).json({success:true,data:courses})
            })
        } catch (error) {
            return { success: false, error }
        } 
}

/** 
 * get many hrs from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function createCourse(req, res) {
    const token = req.headers.authorization
    const course = req.body.course;
    if(tokenChecker(token,res) !== true) return
        courseCollection.insertMany(course,((err,doc)=>{
            if (err) throw new Error(`error on create doc: ${err}`);
            return res.status(200).json({success:true,data:doc})
        }))
    try {
    } catch (error) {
        res.status(400).json({ success: false, error })
    } 
}

module.exports = {
    createCourse,
    getAllCourses,
    deleteCourseByUrlId,
    updateCourseByUrlId,
};