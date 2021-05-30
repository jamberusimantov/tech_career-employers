const companyRouter = require('express').Router()
const company_ctrl = require('./company_ctrl')
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.cwd() + '/uploads/')
    },
    filename: function (req, file, cb) {
        let ext = file.fieldname.split(".").slice(-1)[0] 
        console.log(file);
      cb(null, Date.now() + "." + ext)
    }
  })
const upload = multer({ storage: storage })

companyRouter.post('/company', company_ctrl.postCompany)
companyRouter.get('/all', company_ctrl.getAllCompany)
companyRouter.get('/company/:Id', company_ctrl.getCompanyById)
companyRouter.get('/jobs/:Id', company_ctrl.getJobsByCompanyId)
companyRouter.get('/jobs/:Id/:sort', company_ctrl.getJobsByCompanyId)
companyRouter.put('/company/:Id', company_ctrl.updateCompanyById)
companyRouter.delete('/company/:Id', company_ctrl.deleteCompanyById)
companyRouter.post('/logo/:Id', upload.any(), company_ctrl.updateCompanyLogo)

module.exports = companyRouter;