const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const admin = new Schema({
    email: {type: String,required: true},
        name:String,
        password:String,
        phone: String,
        isAuth:{type:Boolean, default: true},
        token: String,
        notifications: { notifications: [], new: [] },
        role:{type:String, default: 'Admin'},
        steps:{type:Number, default: 1},
        date: {
            type: Date,
            default: Date.now,
        },
    },
)
module.exports = mongoose.model('admin', admin)