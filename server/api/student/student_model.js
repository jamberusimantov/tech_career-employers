const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const student = new Schema({
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        isAuth: {
            type: Boolean,
            default: false
        },
        dateOfBirth:Date,
        country: String,
        city: String,
        street: String,
        specialty: String,
        isWorking: Boolean,  // optional
        workCompany: String, // optional
        linkedInLink: String,
        githubLink:String,
        personalWebLink:String,
        token: String,
        section: String,
        projects:[{projectName:String, aboutIt:String}],
        education:[{trainingPlace:String, years:String}],
        picture: {
            _id: String,
            data: Buffer,
            name: String,
            contentType: String,
            size: Number,
            path: String,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
)
module.exports = mongoose.model('student', student)