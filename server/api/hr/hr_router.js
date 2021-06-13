const hrRouter = require('express').Router()
const hrCtrl = require('./hr_ctrl')

hrRouter.post('/many', hrCtrl.getManyHrs)
hrRouter.post('/single', hrCtrl.getHr)

hrRouter.put('/hr/:Id', hrCtrl.updateHrByUrlId)
hrRouter.delete('/hr/:Id', hrCtrl.deleteHrByUrlId)
hrRouter.get('/hr/:Id', hrCtrl.getHrByUrlId)

module.exports = hrRouter