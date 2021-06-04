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
        courseName: String,
        courseCompletionDate:String,
        numberOfGraduates:Number,
        cycle: String,
        isWorking:Boolean,
        role:String,
        section: String,
        isAuth: Boolean,
        token: String,
        company: String,
        about: String,
        isActive: Boolean,
        friends: [{ _id: String, name: String }],
        notifications: { notifications: [], new: [] },
        messages: { messages: [], new: [] },
        tags: Object,
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