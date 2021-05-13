const hrCollection = require('../models/hr_model')
const hrToAuthCollection = require('../models/auth_hr_model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const passport = require('passport')

// Load input validation
const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')

/** 
 * signup hr to website- auth hr collection
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
                        hrToAuthCollection.insertMany(hr, (err) => {
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
                        const dataToUpdate = { isActive: true, token: `bearer ${token}` };
                        await hrCollection.findByIdAndUpdate(requestedHr._id, dataToUpdate, (err, userItem) => {
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
 * approve hr from auth hr collection and push to hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function approveHr(req, res) {
    const { _id, isAuth, section } = req.body.user
    const dataToUpdate = { isAuth, section };
    const auth = data => {
        data.section = section
        return data;
    }
    try {
        await hrToAuthCollection.findByIdAndUpdate(_id, dataToUpdate, async(err, hr) => {
            err ? res.status(400).json({ success: false, error: err }) :
                !hr ? res.status(404).json({ success: false, message: 'user isn\'t found on auth collection' }) :
                isAuth && await hrCollection.insertMany(auth(hr), (err) => {
                    err ? res.status(400).json({ success: false, error: err }) :
                        res.status(201).json({
                            success: true,
                            message: `${hr.email} approved  and moved to hr collection successfully`
                        })
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
    const token = req.headers.authorization
    try {
        if (token) {
            await hrCollection.findOne({ token }, (err, hr) => {
                const filteredPrivateProps = () => ({ notifications, messages, name, email, friends, pictures, date } = hr)
                err ? res.status(400).json({ success: false, error: err }) :
                    !hr ? res.status(404).json({ success: false, message: 'user isn\'t authorized' }) :
                    res.status(200).json({ success: true, data: filteredPrivateProps(), message: 'authorize hr successfully' })
            })
        } else {
            res.status(400).json({ success: false, message: 'bad token' })
        }

    } catch (err) { console.error(err) } finally {}

}
module.exports = {
    registerHr,
    loginHr,
    useToken,
    approveHr,
}