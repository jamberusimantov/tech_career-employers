import { API } from '../app.utils'
import loginService from '../utils/login.utils';
import axios from 'axios';

const headers = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI2NjZmMGExOGVkYjNjOWMyZTIxMmEiLCJuYW1lIjoiQWRpdiBTaGVua29yIiwiZW1haWwiOiJBZGl2QGdtYWlsLmNvbSIsImlhdCI6MTYyMzA2OTY0MCwiZXhwIjoxNzA5NDY5NjQwfQ.4yccRqdHSoXPnCLi0IX1BiR9sQ6fKsaoWisWDuQ3kws'
    }
}
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
        const body = { "jobOffer": {} }
        console.log(loginService.getToken());
        return await (await axios.post(`http://localhost:4201/jobOffers/many`, body, headers)).data.data
        // const res = await fetch(`${API}/jobOffers/many`)
        // return res.json();
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


