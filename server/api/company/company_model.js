const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const company = new Schema({
<<<<<<< HEAD
        logo: {
            type: String
        },
        address: {
            type: String,
            required: true
        },
        site: {
            type: String,
            required: true
        },
        about: {
            type: String,
            required: true
        }
=======
        name: {
            type: String,
            required: true
        },
        field: String,
        info: String,
        phone: String,
        address: String,
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
>>>>>>> d0f8f22a1042fb1baf21a895996fc069eed221d8
    },
    //  { timestamps: true }
)
module.exports = mongoose.model('company', company)