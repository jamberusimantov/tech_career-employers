const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const course = new Schema({
    courseName: {type:String ,required:true},
    courseCompletionDate: {type:String ,required:true},
    numberOfStudents: {type:Number ,required:true},
    idsOfGraduates:{type:Array ,required:true},
    numberOfGraduates: {type:Number ,required:true},
    graduatesWorking:{type:Number ,required:true},
    graduatesNotWorking:{type:Number ,required:true},
    cycle: {type:String ,required:true}, 
})
module.exports = mongoose.model('courses', course)