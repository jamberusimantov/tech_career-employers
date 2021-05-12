const hrCollection = require('../models/hr_model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const passport = require('passport')

// Load input validation
const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')

/** 
 * signup hr to website
 * @param {*} req 
 * @param {*} res 
 */
async function registerHr(req, res) {
    const hr = req.body.user
        //Form validation
    const { errors, isValid } = validateRegisterInput(hr)
        // Check validation
    if (!isValid) return res.status(400).json(errors)
    try {
        await hrCollection.findOne({ email: hr.email }, (err, requestedHr) => {
            if (err) { throw err }
            if (requestedHr) {
                return res.status(400).json({ email: 'Email already exists' })
            } else {
                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) { throw err }
                    bcrypt.hash(hr.password, salt, (err, hash) => {
                        if (err) { throw err }
                        hr.password = hash;
                        hrCollection.insertMany(hr, (err) => {
                            err ? res.status(400).json({ success: false, error: err }) :
                                res.status(201).json({
                                    success: true,
                                    message: `${hr.email} added to DB successfully`
                                })
                        })
                    })
                })
            }
        })
    } catch (err) { console.error(err) } finally {}

}
/** 
 * login hr to website
 * @param {*} req 
 * @param {*} res 
 */
async function loginHr(req, res) {
    const hr = req.body.user
        //Form validation
    const { errors, isValid } = validateLoginInput(hr)
        // Check validation
    if (!isValid) return res.status(400).json(errors)
    try {
        await hrCollection.findOne({ email: hr.email }, (err, requestedHr) => {
            if (err) { throw err }
            //check if user 
            if (!requestedHr) {
                return res.status(400).json({ email: 'user doesn\'t exists' })
            }
            const { _id, name, email } = requestedHr;
            // check password
            bcrypt.compare(hr.password, requestedHr.password).then(isMatch => {
                if (isMatch) {
                    //match user and creat jwt payload
                    const payload = {
                            id: _id,
                            name,
                            email,
                        }
                        //sign token
                    jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 }, async(err, token) => {
                        if (err) { throw err }
                        await hrCollection.findByIdAndUpdate(requestedHr._id, { token: `bearer ${token}` }, (err, userItem) => {
                            err ? res.status(400).json({ success: false, error: err }) :
                                res.json({
                                    success: true,
                                    token: `bearer ${token}`,
                                    data: {
                                        name: userItem.name,
                                        email: userItem.email,
                                    }
                                })
                        })

                    })
                } else {
                    return res.status(400).json({ isMatch: 'user doesn\'t exists' })
                }
            })
        })
    } catch (err) { console.error(err) } finally {}

}
/** 
 * get user by token from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function useToken(req, res) {
    const token = req.body.token
    const dataToUpdate = { isActive: true };
    try {
        await hrCollection.findOneAndUpdate({ token }, dataToUpdate, (err, hr) => {
            const filteredPrivateProps = () => {
                const { notifications, messages, name, email, friends, pictures, date } = hr
                return { notifications, messages, name, email, friends, pictures, date }
            }
            err ? res.status(400).json({ success: false, error: err }) :
                !hr ? res.status(404).json({ success: false, message: 'user isn\'t authorized' }) :
                res.status(200).json({ success: true, data: filteredPrivateProps(), message: 'authorize hr successfully' })
        })
    } catch (err) { console.error(err) } finally {}

}
module.exports = {
    registerHr,
    loginHr,
    useToken,
}