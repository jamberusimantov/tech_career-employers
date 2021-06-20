import { getDoc, postDoc, getManyDocs, getDocById, updateDocById, deleteDocById } from '../DB.utils';
const requiredId = (serviceName: string) => `required Id on ${serviceName}`;
const err = (serviceName: string, error: string) => `error on ${serviceName}: ${error}`;
const collection = 'jobOffers'
const key = 'jobOffer'
const body = (query: object) => ({ jobOffer: query })

export const getJobOffer = async (query: object, token: string) => {
    try {
        return await getDoc(collection, body(query), token)
    }
    catch (error) { return { success: false, error: err('getJobOffer', error) } }
    finally { }
}
export const getManyJobOffers = async ( query?: object) => {
    try {
        return await getManyDocs(collection, body(query || {}))
    }
    catch (error) { return { success: false, error: err('getManyJobOffers', error) } }
    finally { }
}
export const getJobOfferById = async (_id: string, token?: string) => {
    if (!_id) return { success: false, message: requiredId('getJobOfferById') }
    try {
        return await getDocById(collection, key, _id, token)
    }
    catch (error) { return { success: false, error: err('getJobOfferById', error) } }
    finally { }
}
export const updateJobOfferById = async (query: object, _id?: string, token?: string) => {
    if (!_id) return { success: false, message: requiredId('updateJobOfferById') }
    try {
        return await updateDocById(collection, body(query), key, _id, token)
    }
    catch (error) { return { success: false, error: err('updateJobOfferById', error) } }
    finally { }
}
export const deleteJobOfferById = async (_id: string, token?: string) => {
    if (!_id) return { success: false, message: requiredId('deleteJobOfferById') }
    try {
        return await deleteDocById(collection, key, _id, token)
    }
    catch (error) { return { success: false, error: err('deleteJobOfferById', error) } }
    finally { }
}
export const postJobOffer = async (doc: object, token?: string) => {
    try {
        return await postDoc(collection, body(doc), key, token)
    }
    catch (error) { return { success: false, error: err('getJobOffer', error) } }
    finally { }
}

 
  // const finalDateToApply = new Date();
  // finalDateToApply.setFullYear(2021, 5, 31);
  // finalDateToApply.setHours(13, 0, 0);
  // finalDateToApply.setMilliseconds(0);

  // const jobOffer = {
  //   uploadedBy: 'jamber@google.com',
  //   finalDateToApply,
  //   company: 'google',
  //   location: 'tel aviv',
  //   jobDescription: 'codein +',
  //   workRequirements: 'ambition',
  //   minYearsOfExperience: '0',
  //   notes: 'promise to robust you :)',
  // }

  // getManyJobOffers(token).then(data => console.log(data))
  // getManyJobOffers(token, { _id: "60b787e1b3434f0a98f21459" }).then(data => console.log(data))
  // postJobOffer(jobOffer, token).then(data => console.log(data))
  // getJobOfferById('60b7cffe4d638323000e7228', token).then(data => console.log(data))
  // updateJobOfferById({ isHidden: true }, "60b7bc72095e2d0900d81eb1", token).then(data => console.log(data))
  // deleteJobOfferById('60b787e1b3434f0a98f21459',token).then(data => console.log(data))
