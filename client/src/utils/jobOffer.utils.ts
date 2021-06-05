import { getDoc, postDoc, getManyDocs, getDocById, updateDocById, deleteDocById } from './DB.utils';
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
export const getManyJobOffers = async (token: string, query?: object) => {
    try {
        return await getManyDocs(collection, body(query || {}), token)
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
export const postJobOffer = async (doc: object, token: string) => {
    try {
        return await postDoc(collection, body(doc), key, token)
    }
    catch (error) { return { success: false, error: err('getJobOffer', error) } }
    finally { }
}

