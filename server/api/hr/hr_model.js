const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const hr = new Schema({
        email: {
            type: String,
            required: true
        },
        password: String,
        company: String,
        name: String,
        phone: String,
        token: String,
        isAuth: Boolean,
        isActive: Boolean,
        isCompanyFirstUser: {
            type: Boolean,
            default: false
        },
        img: {
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
    },
    //  { timestamps: true }
)
module.exports = mongoose.model('hr', hr)