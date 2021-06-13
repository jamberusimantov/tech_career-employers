import { API } from '../app.utils';
import http from './http.utils';
const { GET, POST, PUT, DELETE } = http
const requiredId = (serviceName: string) => `required Id on ${serviceName}`;
const requiredCollection = (serviceName: string) => `required collection on ${serviceName}`;
const requiredKey = (serviceName: string) => `required key on ${serviceName}`;
const err = (serviceName: string, error: string) => `error on ${serviceName}`;

export async function getDoc(collection: string, body: object, token: string) {
    if (!collection) return { success: false, message: requiredCollection('getDoc') }
    const url = `${API}/${collection}/single`;
    try {
        return await POST(url, body, token)
    }
    catch (error) { return { success: false, error: err('getDoc', error) } }
    finally { }
}
export async function getManyDocs(collection: string, body?: object, token?: string) {
    if (!collection) return { success: false, message: requiredCollection('getManyDocs') }
    const url = `${API}/${collection}/many`;
    try {
        return await POST(url, body, token)
    }
    catch (error) { return { success: false, error: err('getManyDocs', error) } }
    finally { }
}
export async function getDocById(collection: string, key: string, _id: string, token?: string) {
    const id = _id
    if (!id) return { success: false, message: requiredId('getDocById') }
    if (!collection) return { success: false, message: requiredCollection('getDocById') }
    if (!key) return { success: false, message: requiredKey('getDocById') }
    const url = `${API}/${collection}/${key}/${id}`;
    try {
        return await GET(url, token)
    }
    catch (error) { return { success: false, error: err('getDocById', error) } }
    finally { }
}
export async function updateDocById(collection: string, body: object, key: string, _id: string, token?: string) {
    const id = _id
    if (!id) return { success: false, message: requiredId('updateDocById') }
    if (!collection) return { success: false, message: requiredCollection('updateDocById') }
    if (!key) return { success: false, message: requiredKey('updateDocById') }
    const url = `${API}/${collection}/${key}/${id}`;
    try {
        return await PUT(url, body, token)
    }
    catch (error) { return { success: false, error: err('updateDocById', error) } }
    finally { }
}
export async function deleteDocById(collection: string, key: string, _id: string, token?: string) {
    const id = _id
    if (!id) return { success: false, message: requiredId('deleteDocById') }
    if (!collection) return { success: false, message: requiredCollection('deleteDocById') }
    if (!key) return { success: false, message: requiredKey('deleteDocById') }
    const url = `${API}/${collection}/${key}/${id}`;
    try {
        return await DELETE(url, undefined, token)
    }
    catch (error) { return { success: false, error: err('deleteDocById', error) } }
    finally { }
}
export async function postDoc(collection: string, body: object, key: string, token?: string) {
    if (!collection) return { success: false, message: requiredCollection('getDoc') }
    const url = `${API}/${collection}/${key}`;
    try {
        return await POST(url, body, token)
    }
    catch (error) { return { success: false, error: err('getDoc', error) } }
    finally { }
}