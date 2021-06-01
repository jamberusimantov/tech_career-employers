const Validator = require('validator')
const isEmpty = require('is-empty')

const validateInitialUserRegistration = (data, role) => {
    const errors = {}
    data.email = !isEmpty(data.email) ? data.email : '';
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }
    if (role !== 'hr') return {
        errors,
        isValid: isEmpty(errors)
    }
    data.company = !isEmpty(data.company) ? data.company : '';
    if (Validator.isEmpty(data.company)) {
        errors.company = "company field is required"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
const validateRegisterInput = (data) => {
    let errors = {}
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password1 = !isEmpty(data.password1) ? data.password1 : '';
    if (Validator.isEmpty(data.phone)) {
        errors.phone = "phone field is required"
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }
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
const validateCompanyRegisterInput = (data) => {
    let errors = {}
    data.field = !isEmpty(data.field) ? data.field : '';
    data.info = !isEmpty(data.info) ? data.info : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.address = !isEmpty(data.address) ? data.address : '';

    if (Validator.isEmpty(data.phone)) {
        errors.phone = "phone field is required"
    }
    if (Validator.isEmpty(data.address)) {
        errors.address = "address field is required"
    }
    if (Validator.isEmpty(data.info)) {
        errors.info = "info field is required"
    }
    if (Validator.isEmpty(data.field)) {
        errors.field = "field field is required"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
const validateLoginInput = (data) => {
    let errors = {}
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = {
    validateInitialUserRegistration,
    validateRegisterInput,
    validateCompanyRegisterInput,
    validateLoginInput
}