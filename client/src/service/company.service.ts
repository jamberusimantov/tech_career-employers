import { API } from '../app.utils'
import loginService from './login.service';

export async function getAllCompany() {
    try {
        const res = await fetch(`${API}/company/all`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': loginService.getToken()
            },
        })
        return res.json();
    }
    catch (err) { console.error(err) }
    finally { }
}

export async function getCompanyById(Id: string) {
    try {
        if (Id.length === 24) {
            const res = await fetch(`${API}/company/company/${Id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': loginService.getToken()
                },
            })
            return res.json();
        }
        return 'bad id'
    }
    catch (err) { console.error(err) }
    finally { }
}

export async function getJobsByCompanyId(Id: string, Sort: String) {
    try {
        if (Id.length === 24) {
            const res = await fetch(`${API}/company/jobs/${Id}/${Sort}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': loginService.getToken()
                },
            })
            return res.json();
        }
        return 'bad id'
    }
    catch (err) { console.error(err) }
    finally { }
}

export async function postCompany(credentials: any) {
    try {
            const res = await fetch(`${API}/company/company`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': loginService.getToken()
                },
                body: JSON.stringify({ dataToPost: credentials })
            })
            return res.json();
    }
    catch (err) { console.error(err) }
    finally { }
}

export async function updateCompany(credentials: any) {
    try {
            const res = await fetch(`${API}/company/company/${credentials.Id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': loginService.getToken()
                },
                body: JSON.stringify({ dataToPost: credentials })
            })
            return res.json();
    }
    catch (err) { console.error(err) }
    finally { }
}

export async function updateLogo(formData: any, Id: any) {
    try {
            const res = await fetch(`${API}/company/logo/${Id}`,{
                method: 'POST',
                headers: {
                    'authorization': loginService.getToken()
                },
                body: formData
            })
            return res.json();
    }
    catch (err) { console.error(err) }
    finally { }
}

