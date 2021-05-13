const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const auth_hr = new Schema({
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
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
        isAuth: {
            type: Boolean
        },
        section: {
            type: String,
        },
    },
    //  { timestamps: true }
)
module.exports = mongoose.model('auth_hr', auth_hr)