const jobOfferRouter = require('express').Router()
const jobOffer_ctrl = require('../ctrl/JobOffer_ctrl')


jobOfferRouter.get('/all', jobOffer_ctrl.getAllJobOffers)
jobOfferRouter.get('/JobOffer/:Id', jobOffer_ctrl.getJobOffer)
jobOfferRouter.post('/JobOffer', jobOffer_ctrl.postJobOffer)
jobOfferRouter.put('/JobOffer/:Id', jobOffer_ctrl.updateJobOffer)
jobOfferRouter.delete('/JobOffer/:Id', jobOffer_ctrl.deleteJobOffer)


module.exports = jobOfferRouter;