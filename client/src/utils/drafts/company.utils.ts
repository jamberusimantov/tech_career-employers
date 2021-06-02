import { getDoc, getManyDocs, getDocById, updateDocById, deleteDocById } from '../DB.utils';
const requiredId = (serviceName: string) => `required Id on ${serviceName}`;
const err = (serviceName: string, error: string) => `error on ${serviceName}: ${error}`;
const collection = 'companies'
const key = 'company'
const body = (query: object) => ({ company: query })

export const getCompany = async (query: object, token: string) => {
    try {
        return await getDoc(collection, body(query), token)
    }
    catch (error) { return { success: false, error: err('getCompany', error) } }
    finally { }
}
export const getManyCompanies = async (token: string, query?: object) => {
    try {
        return await getManyDocs(collection, body(query || {}), token)
    }
    catch (error) { return { success: false, error: err('getManyCompanies', error) } }
    finally { }
}
export const getCompanyById = async (_id: string, token?: string) => {
    if (!_id) return { success: false, message: requiredId('getCompanyById') }
    try {
        return await getDocById(collection, key, _id, token)
    }
    catch (error) { return { success: false, error: err('getCompanyById', error) } }
    finally { }
}
export const updateCompanyById = async (query: object, _id?: string, token?: string) => {
    if (!_id) return { success: false, message: requiredId('updateCompanyById') }
    try {
        return await updateDocById(collection, body(query), key, _id, token)
    }
    catch (error) { return { success: false, error: err('updateCompanyById', error) } }
    finally { }
}
export const deleteCompanyById = async (_id: string, token?: string) => {
    if (!_id) return { success: false, message: requiredId('deleteCompanyById') }
    try {
        return await deleteDocById(collection, key, _id, token)
    }
    catch (error) { return { success: false, error: err('deleteCompanyById', error) } }
    finally { }
}

  // getCompany({ name: 'facebook' }, token).then(data => console.log(data))
  // getManyCompanies(token, { field: 'internet' }).then(data => console.log(data))
  // getManyCompanies(token).then(data => console.log(data))
  // getCompanyById('60b72bef59a5dcdfa2c218cc', token).then(data => console.log(data))
  // updateCompanyById({info:'big brother reality internet 4'},"60b72bef59a5dcdfa2c218cc",token).then(data => console.log(data))
  // deleteCompanyById('60b72c1359a5dcdfa2c218cd',token).then(data => console.log(data))
