const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const jobOffer = new Schema({
        uploadedBy: {
            type: String,
            required: true
        },
        logo:{
            type:String,
            required:false
        },
        numOfPeopleApplied :{
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        emailHr: {
            type: String,
            required: true
        },
        uploadDate: {
            type: Date,
            default: Date.now,
        },
        finalDateToApply: {
            type: Date,
        },
        company: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        jobDescription: {
            type: String,
            required: true
        },
        workRequirements: {
            type: String,
            required: true
        },
        minYearsOfExperience: {
            type: String,
            required: true
        },
        numOfViews: {
            type: Number,
            default: 0,
        },
        notes: {
            type: String,
        },
        isHidden: {
            type: Boolean,
            default: true,
        },
        status: {
            type: String,
            default: 'OPEN',
        },
    },
    //  { timestamps: true }
)

module.exports = mongoose.model('jobOffer', jobOffer)