const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const student = new Schema({
      name:{
        type: String,
        required: true
      },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        // courseName: {
        //     type: String,
        //     required: true
        // },

        // courseCompletionDate:{
        //     type: String,
        //     required: true
        // },

        // numberOfGraduates:{
        //     type: Number,
        //     required: true
        // },
        // cycle: {
        //     type: String,
        //     required: true
        // },
        // isWorking:{
        //     type: Boolean,
        //     required: true
        // },
        // role:{
        //     type: String,
        //     required: true
        // },
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