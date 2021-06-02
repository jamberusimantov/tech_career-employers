const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const company = new Schema({
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
    },
    //  { timestamps: true }
)
module.exports = mongoose.model('company', company)