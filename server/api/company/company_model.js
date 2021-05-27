const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const company = new Schema({
link: {
    type: String,
    required: true
},
about: {
    type: String,
    required: true
},
pic: {
    type: String,
    required: true
},
address: {
    type: String,
    required: true
},
field: {
    type: String,
    required: true
},
})
module.exports = mongoose.model('hr', hr)