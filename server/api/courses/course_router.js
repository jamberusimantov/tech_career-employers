const courseRouter = require('express').Router()
const course_ctrl = require('./course_ctrl')

courseRouter.get('/all', course_ctrl.getAllCourses)
courseRouter.post('/', course_ctrl.createCourse)
courseRouter.put('/:Id', course_ctrl.updateCourseByUrlId)
courseRouter.delete('/:Id', course_ctrl.deleteCourseByUrlId)

module.exports = courseRouter;

