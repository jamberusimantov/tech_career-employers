const registerRouter = require('express').Router()
const registerCtrl = require('./register_ctrl')

registerRouter.post(`/register/:Role`, registerCtrl.registerUser)
registerRouter.put(`/signUp/:Role`, registerCtrl.signUpUser)
registerRouter.put(`/signUpAdmin`, registerCtrl.signUpAdmin)

registerRouter.post('/login/:Role', registerCtrl.loginUser)
registerRouter.post('/useToken', registerCtrl.useToken)
module.exports = registerRouter;
