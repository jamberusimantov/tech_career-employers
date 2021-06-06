import { API } from '../app.utils'

export async function getHrById(Id: string) {
    try {
        if (Id.length === 24) {
            const res = await fetch(`${API}/hrs/hr/${Id}`)
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
            const res = await fetch(`${API}/hrs/hr`, {
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
    const { email } = credentials;
    try {
        if (email) {
            const res = await fetch(`${API}/hrs/hr`, {
                method: 'PUT',
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
export async function deleteUser(credentials: any) {
    const { email } = credentials;
    try {
        if (email) {
            const res = await fetch(`${API}/hrs/hr`, {
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

