import { API } from './app.service'

export async function getHrById(Id: string) {
    try {
        if (Id.length === 24) {
            const res = await fetch(`${API}/hr/${Id}`)
            return res.json();
        }
        return 'bad id, check id '
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function getHr(credentials: any) {
    const { email } = credentials;
    try {
        if (email) {
            const res = await fetch(`${API}/hr/getHr`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: credentials })
            })
            return res.json();
        }
        return 'email is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function updateHr(credentials: any) {
    const { email} = credentials;
    const formData = new FormData()
    try {
        if (email) {
            for (const key in credentials) {
                if (Object.prototype.hasOwnProperty.call(credentials, key)) {
                    formData.append(`${key}`, credentials[key])
                }
            }
            const res = await fetch(`${API}/hr/updateHr`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formData
            })
            return res.json();
        }
        return 'email is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function deleteUser(credentials: any) {
    const { email } = credentials;
    try {
        if (email) {
            const res = await fetch(`${API}/hr/deleteHr`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: credentials })
            })
            return res.json();
        }
        return 'email is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function getAllHrs() {
    try {
        const res = await fetch(`${API}/hr/all`)
        return res.json();
    }
    catch (err) { console.error(err) }
    finally { }
}

