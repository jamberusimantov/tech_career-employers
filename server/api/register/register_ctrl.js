const hrCollection = require('../hr/hr_model')
const studentCollection = require('../student/student_model')
const register_validation = require('./register_validation')
const { validateRegisterInput, validateLoginInput } = register_validation
const DB = require('../../utils/DB.utils')
const { getDoc, postDoc, updateDoc, filteredPrivateProps } = DB
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const passport = require('passport')
const chalk = require('chalk')
const collections = {
    hr: hrCollection,
    student: studentCollection
}

/** 
 * signUp User to website- hr collection/ user Collection
 * @param {*} req 
 * @param {*} res 
 */
async function registerUser(req, res) {
    const user = req.body.user;
    const { email, password } = user;
    const role = req.params.Role && req.params.Role.toLowerCase();
    if (!role) return res.status(404).json({
        success: false,
        message: 'role is required'
    });
    const collection = collections[role]
    if (!collection) return res.status(404).json({
        success: false,
        message: `role: ${role} is not recognized`
    })
    const { errors, isValid } = validateRegisterInput(user)
    if (!isValid) return res.status(400).json(errors)
    const getDocSuccessCb = () => res.status(400).json({
        success: false,
        message: `user: ${email} already exists`
    })
    const getDocFailCb = () => {
        bcrypt.genSalt(10, (error, salt) => {
            if (error) throw new Error(`error on gen Salt: ${error}`)
            bcrypt.hash(password, salt, async(error, hash) => {
                if (error) throw new Error(`error on hash password: ${error}`)
                req.body.user.password = hash;
                const postDocSuccessCb = () => {
                    res.status(201).json({
                        success: true,
                        message: `post doc: ${email} successfully`
                    });
                }
                const postRes = await postDoc(collection, user, postDocSuccessCb)
                if (postRes && postRes.error) throw new Error(postRes.error)
            })
        })

    }
    try {
        const getRes = await getDoc(collection, user, getDocSuccessCb, getDocFailCb);
        if (getRes && getRes.error) throw new Error(getRes.error)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/** 
 * approve user to to website- hr collection/ user Collection
 * @param {*} req 
 * @param {*} res 
 */
async function approveUser(req, res) {

    const user = req.body.user
    const { _id, isAuth, section } = user
    const role = req.params.Role && req.params.Role.toLowerCase()
    if (!role) return res.status(404).json({
        success: false,
        message: 'role is required'
    })
    const collection = collections[role]
    if (!collection) return res.status(404).json({
        success: false,
        message: `role: ${role} is not recognized`
    })
    const updateDocSuccessCb = data => res.status(201).json({
        success: true,
        message: !isAuth ? `user: ${data.email} rejected successfully` : `user: ${data.email} approved & classified as ${section} successfully`
    })
    const updateDocFailCb = () => res.status(400).json({
        success: false,
        message: `user: ${_id} not found`
    })
    try {
        const updateRes = await updateDoc(collection, user, updateDocSuccessCb, updateDocFailCb, test => res.json(test));
        if (updateRes && updateRes.error) throw new Error(updateRes.error)
    } catch (error) {
        res.status(400).json({ success: false, error })
    } finally {}
}
/** 
 * login user to website- hr collection/ user Collection
 * @param {*} req  
 * @param {*} res 
 */
async function loginUser(req, res) {
    const user = req.body.user
    const role = req.params.Role && req.params.Role.toLowerCase()
    const { email, password } = user
    const query = { email }
    if (!role) return res.status(404).json({
        success: false,
        message: 'role is required'
    })
    const collection = collections[role]
    if (!collection) return res.status(404).json({
        success: false,
        message: `role: ${role} is not recognized`
    })
    const { errors, isValid } = validateLoginInput(user)
    if (!isValid) return res.status(400).json(errors)
    const getDocSuccessCb = (data) => {
        const { _id, name, email } = data;
        const passwordFromDB = data.password;
        if (!data.isAuth) return res.status(400).json({
            success: false,
            message: `user: ${email} isn't auth`
        })
        bcrypt.compare(password, passwordFromDB).then((isMatch) => {
            if (!isMatch) return res.status(400).json({
                success: false,
                message: "user credentials doesn't match"
            })
            const tokenOptions = { expiresIn: 31556926 }
            const payload = {
                id: _id,
                name,
                email,
            }
            jwt.sign(payload, keys.secretOrKey, tokenOptions, async(err, token) => {
                if (err) throw new Error(`error on sign token ${err}`)
                const dataToUpdate = { _id, isActive: true, token: `Bearer ${token}` };
                const updateDocSuccessCb = data => res.status(200).json({
                    success: true,
                    token: `Bearer ${token}`,
                    data: {
                        name: data.name,
                        email: data.email
                    }
                })
                const updateDocFailCb = () => res.status(400).json({
                    success: false,
                    message: `user: ${email} not found`
                })
                const updateRes = await updateDoc(collection, dataToUpdate, updateDocSuccessCb, updateDocFailCb);
                if (updateRes && updateRes.error) throw new Error(updateRes.error)
            })
        })
    }
    const getDocFailCb = () => res.status(400).json({
        success: false,
        message: `user: ${email} not found`
    })
    try {
        const getRes = await getDoc(collection, query, getDocSuccessCb, getDocFailCb);
        if (getRes && getRes.error) throw new Error(updateRes.error)
    } catch (error) {
        return res.status(400).json({ success: false, error })
    } finally {}
}
/** 
 * get user by token from hr collection
 * @param {*} req 
 * @param {*} res 
 */
async function useToken(req, res) {
    const token = req.headers.authorization
    const role = req.params.Role && req.params.Role.toLowerCase()
    if (!token) return res.status(400).json({
        success: false,
        message: 'authorization token needed'
    })
    if (!role) return res.status(404).json({
        success: false,
        message: 'role is required'
    })
    const collection = collections[role]
    if (!collection) return res.status(404).json({
        success: false,
        message: `role: ${role} is not recognized`
    })
    const query = { token };
    const getDocSuccessCb = (data) => res.status(201).json({
        success: true,
        data: filteredPrivateProps(data, 'self'),
        message: `authorize ${data.name} successfully`
    })
    const getDocFailCb = () => res.status(400).json({
        success: false,
        token,
        message: 'unAuth token'
    })
    try {
        const getRes = await getDoc(collection, query, getDocSuccessCb, getDocFailCb);
        if (getRes && getRes.error) throw new Error(getRes.error)
    } catch (error) {
        return res.status(400).json({ success: false, error })
    } finally {}

}
module.exports = {
    registerUser,
    approveUser,
    loginUser,
    useToken,
}