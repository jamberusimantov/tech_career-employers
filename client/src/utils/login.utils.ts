import { API } from '../app.utils';
import Http from './http.utils';

class LogIn {
    token = 'token';
    logList: any[] = [];
    async registerUser(credentials: { company: string, email: string }, role: string) {
        const url = `${API}/registration/register/${role}`
        const body = { user: credentials }
        try {
            return await Http.POST(url, body)
        } catch (error) { return error }
        finally { }
    }
    async getUserUseToken(token: string) {
        const url = `${API}/registration/useToken`
        const body = undefined
        try {
            return await Http.POST(url, body, token)
        } catch (error) { return error }
        finally { }
    }
    async signUpUser(credentials: { user: object, company: object }, role: string, token?: string) {
        const url = `${API}/registration/signUp/${role}`
        const body = credentials
        try {
            return await Http.PUT(url, body, token)
        } catch (error) { return error }
        finally { }
    }
    async loginUser(credentials: { password: string, email: string }, role: string) {
        const url = `${API}/registration/login/${role}`
        const body = { user: credentials }
        try {
            return await Http.POST(url, body)
        } catch (error) { return error }
        finally { }
    }

    getToken = () => this.getTokenLocal() || this.getTokenSession() || '';
    getTokenSession = () => sessionStorage.getItem(this.token);
    getTokenLocal = () => localStorage.getItem(this.token);

    setTokenSession = (userToken: string) => sessionStorage.setItem(this.token, userToken);
    setTokenLocal = (userToken: string) => localStorage.setItem(this.token, userToken);

    refreshToken(token: string) {
        if (this.getTokenLocal()) {
            this.setTokenLocal(token)
        }
        else if (this.getTokenSession()) {
            this.setTokenSession(token)
        }
    }
    removeToken() {
        localStorage.removeItem(this.token);
        sessionStorage.removeItem(this.token);
    }
}
export default new LogIn();