const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const company = new Schema({

        name: {
            type: String,
            required: true
        },
        field: String,
        info: String,
        address: String,
        siteLink: String,

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

)
module.exports = mongoose.model('company', company)