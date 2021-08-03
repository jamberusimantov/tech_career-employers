const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const student = new Schema({
    email: { type: String, required: true },
    name: String,
    password: String,
    phone: String,
    token: String,
    about: String,
    profilePicture: String,
    cv: Object,
    programmingLang: Array,
    links: {
        github: String,
        facebook: String,
        linkedIn: String,
        personalSite: String
    },
    isAuth: Boolean,
    courseId: String,
    courseName: String,
    cycle: String,
    isGraduated: Boolean,
    isWorking: Boolean,
    company: String,
    steps: { type: Number, default: 1 },
    specialty: String,
    role: { type: String, default: 'Student' },
}, )
module.exports = mongoose.model('student', student)