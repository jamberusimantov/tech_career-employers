const adminRouter = require('express').Router()
const admin_ctrl = require('./admin_ctrl')

adminRouter.get('/all', admin_ctrl.getAllAdmins)
adminRouter.post('/many', admin_ctrl.getManyAdmins)
adminRouter.post('/single', admin_ctrl.getAdmin)
adminRouter.put('/admin/:Id', admin_ctrl.updateAdminById)
adminRouter.delete('/admin/:Id', admin_ctrl.deleteAdminByUrlId)
adminRouter.get('/admin/:Id', admin_ctrl.getAdminByUrlId)
module.exports = adminRouter;

