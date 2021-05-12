const hrRouter = require('express').Router()
const hr_ctrl = require('../ctrl/hr_ctrl')


hrRouter.get('/:Id', hr_ctrl.getHrById)
hrRouter.post('/getHr', hr_ctrl.getHr)
hrRouter.put('/updateHr', hr_ctrl.updateHr)
hrRouter.delete('/deleteHr', hr_ctrl.deleteHr)
hrRouter.get('/all', hr_ctrl.getAllHrs)


module.exports = hrRouter;