import { API } from '../app.utils'
import loginService from '../utils/login.utils';

export async function getAllJobOffers() {
    try {
        const res = await fetch(`${API}/jobOffers/all`)
        return res.json();
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function getManyJobOffers() {
    try {
        const res = await fetch(`${API}/jobOffers/all`)
        return res.json();
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function getJobOffer(Id: string) {
    try {
        if (Id.length === 24) {
            const res = await fetch(`${API}/jobOffers/JobOffer/${Id}`)
            return res.json();
        }
        return 'bad id'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function postJobOffer(credentials: any) {
    try {
        const res = await fetch(`${API}/jobOffers/JobOffer`, {
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
export async function updateJobOffer(credentials: any) {
    const { Id } = credentials;
    try {
        if (Id.length === 24) {
            const res = await fetch(`${API}/jobOffers/JobOffer/${Id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': loginService.getToken()
                },
                body: JSON.stringify({ dataToUpdate: credentials })
            })
            return res.json();
        }
        return 'email is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function deleteJobOffer(Id: string) {
    try {
        if (Id.length === 24) {
            const res = await fetch(`${API}/jobOffers/JobOffer/${Id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            return res.json();
        }
        return 'bad id'
    }
    catch (err) { console.error(err) }
    finally { }
}


