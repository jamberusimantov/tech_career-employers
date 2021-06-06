import { getDoc, getManyDocs, getDocById, updateDocById, deleteDocById } from '../DB.utils';
const requiredId = (serviceName: string) => `required Id on ${serviceName}`;
const err = (serviceName: string, error: string) => `error on ${serviceName}: ${error}`;
const collection = 'hrs'
const key = 'hr'
const body = (query: object) => ({ hr: query })

export const getHr = async (query: object, token: string) => {
    try {
        return await getDoc(collection, body(query), token)
    }
    catch (error) { return { success: false, error: err('getHr', error) } }
    finally { }
}
export const getManyHrs = async (token: string, query?: object) => {
    try {
        return await getManyDocs(collection, query && body(query), token)
    }
    catch (error) { return { success: false, error: err('getManyHrs', error) } }
    finally { }
}
export const getHrById = async (_id: string, token?: string) => {
    if (!_id) return { success: false, message: requiredId('getHrById') }
    try {
        return await getDocById(collection, key, _id, token)
    }
    catch (error) { return { success: false, error: err('getHrById', error) } }
    finally { }
}
export const updateHrById = async (query: object, _id?: string, token?: string) => {
    if (!_id) return { success: false, message: requiredId('updateHrById') }
    try {
        return await updateDocById(collection, body(query), key, _id, token)
    }
    catch (error) { return { success: false, error: err('updateHrById', error) } }
    finally { }
}
export const deleteHrById = async (_id: string, token?: string) => {
    if (!_id) return { success: false, message: requiredId('deleteHrById') }
    try {
        return await deleteDocById(collection, key, _id, token)
    }
    catch (error) { return { success: false, error: err('deleteHrById', error) } }
    finally { }
}


  // getHr({ email: "lior@king.com" }, token).then(data => console.log(data))
  // getManyHrs(token, { company: 'google' }).then(data => console.log(data))
  // getManyHrs(token).then(data => console.log(data))
  // getHrById("60b61267ac39f113dedb0439", token).then(data => console.log(data))
  // updateHrById({phone:'1800bootstrapON'},"60b61267ac39f113dedb0439",token).then(data => console.log(data))
  // deleteCompanyById('60b72c1359a5dcdfa2c218cd',token).then(data => console.log(data))


