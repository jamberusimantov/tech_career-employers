import login from './login.service'
export default async function httpRequest(urlToFetch: string, httpMethod: string = 'GET', reqBody?: object, auth = false) {
    try {
        if (urlToFetch.trim().length === 0) {
            return `url to fetch is required`
        }
        let method;
        switch (httpMethod.toUpperCase()) {
            case 'POST': {
                method = 'POST';
                break;
            }
            case 'PUT': {
                method = 'PUT';
                break;
            }
            case 'DELETE': {
                method = 'DELETE';
                break;
            }
            case 'GET': {
                method = 'GET';
                break;
            }
            default:
                return `http method: ${httpMethod} isn't supported`;
        }
        const res = await fetch(urlToFetch, {
            method,
            headers: auth ?
                {
                    'Content-Type': 'application/json',
                    'authorization': login.getToken()
                }
                : { 'Content-Type': 'application/json' },
            body: reqBody && JSON.stringify(reqBody)
        })
        return res.json()
    }
    catch (err) { console.error(err) }
    finally { }

}