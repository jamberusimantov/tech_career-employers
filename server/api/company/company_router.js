const companyRouter = require('express').Router()
const companyCtrl = require('./company_ctrl')

companyRouter.get('/all', companyCtrl.getAllCompanies)
companyRouter.post('/many', companyCtrl.getManyCompanies)
companyRouter.post('/single', companyCtrl.getCompany)

companyRouter.put('/company/:Id', companyCtrl.updateCompanyByUrlId)
companyRouter.delete('/company/:Id', companyCtrl.deleteCompanyByUrlId)
companyRouter.get('/company/:Id', companyCtrl.getCompanyByUrlId)

module.exports = companyRouter;