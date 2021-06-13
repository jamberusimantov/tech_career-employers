const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const student = new Schema({
    email: {type: String,required: true},
        name:String,
        password:String,
        phone: String,
        courseId:String,
        isGraduated: Boolean,
        courseName: String,
        isWorking:Boolean,
        cycle:String,
        isAuth: Boolean,
        token: String,
        company: String,
        about: String,
        steps:{type:Number, default: 1},
        profilePicture: String,
        pictures:[{path:{ type:String, default: 'https://randomuser.me/api/portraits/men/90.jpg'}}],
        friends: [{ _id: String, name: String }],
        links:{github: {type: String}, facebook: {type: String},linkedIn: {type: String},personalSite: {type: String}},
        notifications: { notifications: [], new: [] },
        messages: { messages: [], new: [] },
        tags: Object,
        specialty:String,
        programmingLang:Array,
        role:{type:String, default: 'Student'},
    },
)
module.exports = mongoose.model('student', student)