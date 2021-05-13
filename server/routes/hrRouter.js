const hrRouter = require('express').Router()
const hr_ctrl = require('../ctrl/hr_ctrl')


hrRouter.get('/all', hr_ctrl.getAllHrs)
hrRouter.post('/hr', hr_ctrl.getHr)
hrRouter.put('/hr', hr_ctrl.updateHr)
hrRouter.delete('/hr', hr_ctrl.deleteHr)
hrRouter.get('/:Id', hr_ctrl.getHrById)

module.exports = hrRouter;