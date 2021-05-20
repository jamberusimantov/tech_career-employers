const register_ctrl = require('./register_ctrl')
const register_router = require('express').Router()

register_router.post(`/signUp/:Role`, register_ctrl.registerUser)
register_router.post('/auth/:Role', register_ctrl.approveUser)
register_router.post('/login/:Role', register_ctrl.loginUser)
register_router.post('/useToken/:Role', register_ctrl.useToken)

module.exports = register_router;