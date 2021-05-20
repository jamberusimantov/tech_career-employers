const jobOfferRouter = require('express').Router()
const jobOffer_ctrl = require('./jobOffer_ctrl')

jobOfferRouter.get('/all', jobOffer_ctrl.getAllJobOffers)
jobOfferRouter.get('/JobOffer/:Id', jobOffer_ctrl.getJobOfferByUrlId)
jobOfferRouter.post('/JobOffer', jobOffer_ctrl.postJobOffer)
jobOfferRouter.put('/JobOffer/:Id', jobOffer_ctrl.updateJobOfferByUrlId)
jobOfferRouter.delete('/JobOffer/:Id', jobOffer_ctrl.deleteJobOfferByUrlId)


module.exports = jobOfferRouter;