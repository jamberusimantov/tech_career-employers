const Validator = require('validator')
const isEmpty = require('is-empty')

const validateJobOfferRegistration = (data) => {
    let errors = {}
    data.uploadedBy = !isEmpty(data.uploadedBy) ? data.uploadedBy : '';
    data.finalDateToApply = !isEmpty(data.finalDateToApply) ? data.finalDateToApply : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.location = !isEmpty(data.location) ? data.location : '';
    data.jobDescription = !isEmpty(data.jobDescription) ? data.jobDescription : '';
    data.workRequirements = !isEmpty(data.workRequirements) ? data.workRequirements : '';
    data.minYearsOfExperience = !isEmpty(data.minYearsOfExperience) ? data.minYearsOfExperience : '';
    data.notes = !isEmpty(data.notes) ? data.notes : '';

    if (Validator.isEmpty(data.company)) {
        errors.company = "company field is required"
    }
    if (Validator.isDate(data.finalDateToApply)) {
        errors.finalDateToApply = "finalDateToApply field is required"
    }
    if (Validator.isEmpty(data.uploadedBy)) {
        errors.uploadedBy = "uploadedBy field is required"
    }
    //  else if (!Validator.isEmail(data.uploadedBy)) {
    //     errors.uploadedBy = "uploadedBy is invalid"
    // }
    if (Validator.isEmpty(data.location)) {
        errors.location = 'location field is required'
    }
    if (Validator.isEmpty(data.jobDescription)) {
        errors.jobDescription = "jobDescription field is required"
    }
    if (Validator.isEmpty(data.workRequirements)) {
        errors.workRequirements = "workRequirements field is required"
    }
    if (Validator.isEmpty(data.minYearsOfExperience)) {
        errors.minYearsOfExperience = "minYearsOfExperience field is required"
    }
    if (Validator.isEmpty(data.notes)) {
        errors.notes = "notes field is required"
    }
    if (!Validator.isLength(data.notes, { min: 6, max: 200 })) {
        errors.notes = 'notes must be at least 6 characters and max 200'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateJobOfferRegistration