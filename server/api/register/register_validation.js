const Validator = require('validator')
const isEmpty = require('is-empty')

function validateRegisterInput(data) {
    let errors = {}
        // Convert empty fields to an empty string so we can use validator
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password1 = !isEmpty(data.password1) ? data.password1 : '';


    //phone checks 
    if (Validator.isEmpty(data.phone)) {
        errors.phone = "phone field is required"
    }

    //Name checks 
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }

    // password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }
    if (Validator.isEmpty(data.password1)) {
        errors.password1 = "Confirm password field is required"
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters'
    }
    if (!Validator.equals(data.password, data.password1)) {
        errors.password1 = 'Passwords must match'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

function validateLoginInput(data) {
    let errors = {}
        // Convert empty fields to an empty string so we can use validator
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }

    // password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = {
    validateRegisterInput,
    validateLoginInput
}