import login from './login.utils'
const { getToken } = login
const err = (serviceName: string, error: string) => `error on ${serviceName}: ${error}`;

class Http {
    async GET(url: string, token = getToken()) {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        }
        try {
            const data = await fetch(url, options)
            return data.json();
        }
        catch (error) { return { success: false, error: Error(err('GET', error)) } }
        finally { }
    }
    async POST(url: string, body?: object, token = getToken()) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: body ? JSON.stringify(body) : null
        }
        try {
            const data = await fetch(url, options)
            return data.json();
        }
        catch (error) {  return { success: false, error: Error(err('POST', error)) } }
        finally { }
    }
    async PUT(url: string, body?: object, token = getToken()) {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: body ? JSON.stringify(body) : null
        }
        try {
            const data = await fetch(url, options)
            return data.json()
        }
        catch (error) {  return { success: false, error: Error(err('PUT', error)) } }
        finally { }
    }
    async DELETE(url: string, body?: object, token = getToken()) {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: body ? JSON.stringify(body) : null
        }
        try {
            const data = await fetch(url, options)
            return data.json()
        }
        catch (error) { return { success: false, error: Error(err('DELETE', error)) } }
        finally { }
    }
}
export default new Http();