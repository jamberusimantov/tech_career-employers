import { API } from './app.service'

class LogIn {
    logList: any[] = [];
    token = 'token';

    async loginUser(credentials: any) {
        return await fetch(`${API}/register/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: credentials })
        })
            .then(data => data.json())
    }

    async signUpUser(credentials: any) {
        return await fetch(`${API}/register/signUp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: credentials })
        })
            .then(data => data.json())
    }
    async getUserUseToken(token: string) {
        try {
            return await fetch(`${API}/register/useToken`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: token })
            })
                .then(data => {
                    return data.json()
                })
        }
        catch (err) { console.error(err) }
        finally { }
    }
    getToken() {
        const tokenString = this.getTokenLocal() || this.getTokenSession()

        return tokenString ? JSON.parse(tokenString) : '';
    }

    removeToken() {
        localStorage.removeItem(this.token);
        sessionStorage.removeItem(this.token);
    }

    setTokenSession(userToken: any) {
        const token = 'token'
        sessionStorage.setItem(token, JSON.stringify(userToken));
    }

    getTokenSession() {
        return sessionStorage.getItem(this.token);
    }

    setTokenLocal(userToken: any) {
        const token = 'token'
        localStorage.setItem(token, JSON.stringify(userToken));
    }

    getTokenLocal() {
        return localStorage.getItem(this.token);

    }

    refreshToken(value: any) {
        if (this.getTokenLocal()) {
            this.setTokenLocal(value)
        }
        else if (this.getTokenSession()) {
            this.setTokenSession(value)
        }
    }
}
export default new LogIn();