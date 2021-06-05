const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const student = new Schema({
    email: {
        type: String,
        required: true
    },
        name:String,
        password:String,
        phone: String,
        courseId:String,
        isGraduated: Boolean,
        courseName: String,
        isWorking:Boolean,
        isAuth: Boolean,
        token: String,
        company: String,
        about: String,
        friends: [{ _id: String, name: String }],
        notifications: { notifications: [], new: [] },
        messages: { messages: [], new: [] },
        tags: Object,
        specialty:String,
        programmingLang:Array,
        role:{type:String, default: 'Student'},
        steps:{type:Number, default: 1},
        pictures: [{
            _id: Object,
            data: Buffer,
            name: String,
            contentType: String,
            size: Number,
            path: String,
        }],
        date: {
            type: Date,
            default: Date.now,
        },
    },
)
module.exports = mongoose.model('student', student)