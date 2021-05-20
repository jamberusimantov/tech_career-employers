const hrRouter = require('express').Router()
const hr_ctrl = require('./hr_ctrl')


hrRouter.get('/all', hr_ctrl.getAllHrs)
hrRouter.post('/hr', hr_ctrl.getHr)
hrRouter.put('/hr', hr_ctrl.updateHrById)
hrRouter.delete('/hr', hr_ctrl.deleteHrById)
hrRouter.get('/hr/:Id', hr_ctrl.getHrByUrlId)

module.exports = hrRouter;