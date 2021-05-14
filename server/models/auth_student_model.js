const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const auth_student = new Schema({
        phone: {
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
        firstName: String,
        lastName: String,
        dateOfBirth:Date,
        country: String,
        city: String,
        street: String,
        specialty: String,
        education:[{trainingPlace:String, years:String}],
        specialtyExperience: String,
        isWorking: Boolean,  // optional
        workCompany: String, // optional
        projects:[{projectName:String, aboutIt:String}],
        linkedInLink: String,
        githubLink:String,
        stackOverflowLink:String,
        personalWebLink:String,
        token: String,
        picture: {
            _id: Object,
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
        isAuth: {
            type: Boolean
        },
        section: {
            type: String,
        },
    },
    //  { timestamps: true }
)
module.exports = mongoose.model('auth_student', auth_student)