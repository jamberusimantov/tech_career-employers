const registerRouter = require('express').Router()
const registerCtrl = require('./register_ctrl')

registerRouter.post(`/register/:Role`, registerCtrl.registerUser)
registerRouter.put(`/signUp/:Role`, registerCtrl.signUpUser)
registerRouter.post('/login/:Role', registerCtrl.loginUser)
registerRouter.post('/useToken/:Role', registerCtrl.useToken)
module.exports = registerRouter;