const jobOfferRouter = require('express').Router()
const jobOffer_ctrl = require('./jobOffer_ctrl')

jobOfferRouter.post('/many', jobOffer_ctrl.getManyJobOffers)
jobOfferRouter.post('/single', jobOffer_ctrl.getJobOffer)

jobOfferRouter.get('/JobOffer/:Id', jobOffer_ctrl.getJobOfferByUrlId)
jobOfferRouter.put('/JobOffer/:Id', jobOffer_ctrl.updateJobOfferByUrlId)
jobOfferRouter.delete('/JobOffer/:Id', jobOffer_ctrl.deleteJobOfferByUrlId)

jobOfferRouter.post('/JobOffer', jobOffer_ctrl.postJobOffer)
module.exports = jobOfferRouter;