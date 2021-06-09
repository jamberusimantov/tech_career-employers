const Validator = require('validator')
const isEmpty = require('is-empty')

const validateMailOptions = (data) => {
    const errors = {}
    data.from = !isEmpty(data.from) ? data.from : '';
    data.to = !isEmpty(data.to) ? data.to : '';
    data.subject = !isEmpty(data.subject) ? data.subject : '';
    data.text = !isEmpty(data.text) ? data.text : '';
    data.html = !isEmpty(data.html) ? data.html : '';

    if (Validator.isEmpty(data.from)) {
        errors.from = "from field is required"
    }
    if (Validator.isEmpty(data.to)) {
        errors.to = "to field is required"
    } else if (!Validator.isEmail(data.to)) {
        errors.to = "to is invalid mail"
    }
    if (Validator.isEmpty(data.subject)) {
        errors.subject = 'subject field is required'
    }
    if (Validator.isEmpty(data.text)) {
        errors.text = 'text field is required'
    }
    if (Validator.isEmpty(data.html)) {
        errors.html = 'html field is required'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateMailOptions