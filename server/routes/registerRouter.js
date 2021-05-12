const registerRouter = require('express').Router()
const register_ctrl = require('../ctrl/register_ctrl')

registerRouter.post('/signUp', register_ctrl.registerHr)
registerRouter.post('/login', register_ctrl.loginHr)
registerRouter.post('/useToken', register_ctrl.useToken)

module.exports = registerRouter;