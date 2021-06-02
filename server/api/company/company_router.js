const companyRouter = require('express').Router()
const companyCtrl = require('./company_ctrl')

companyRouter.post('/many', companyCtrl.getManyCompanies)
companyRouter.post('/single', companyCtrl.getCompany)

companyRouter.put('/company/:Id', companyCtrl.updateCompanyById)
companyRouter.delete('/company/:Id', companyCtrl.deleteCompanyById)
companyRouter.get('/company/:Id', companyCtrl.getCompanyById)

module.exports = companyRouter;