import { API } from '../app.utils'
import axios from 'axios'
class LogIn {
    logList: any[] = [];
    token = 'token';
    

    async loginUser(credentials: { email: string, password: string },role:string) {
        return await fetch(`${API}/registration/login/${role}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: credentials })
        })
            .then(data => data.json())
    }
    async signUpUser(credentials: { name: string, password: string, password1: string, email: string }) {
        return await fetch(`${API}/register/signUp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: credentials })
        })
            .then(data => data.json())
    }

    async register(){
        const body:any = {
            "user":{
                "email": "test1@gmail.com",
                "password": "123123123",
                "password1": "123123123",
                "name" : "test1",
                "phone" : "055555555"
            }
        }
        // const headers:any = {
        //     headers: {
        //       authorization: localStorage.getItem('token')
        //     }
        //   }
        try {
            return await (await axios.post('http://localhost:4201/registration/register/student',body)).data;
        } catch (error) {
            
        }
    }

    async approveHr(credentials: { _id: string, isAuth: boolean, section: string }) {
        return await fetch(`${API}/register/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: credentials })
        })
            .then(data => data.json())
    }
    async getUserUseToken(token: string, role:string) {
        const data = {
            "user":{
                "token": localStorage.getItem('token')
            }
        }
        const headers = {
            headers: {
                Authorization: token
            }
          }
        try {
            return await(await axios.post(`http://localhost:4201/registration/useToken/${role}`,data,headers)).data
        }
        catch (err) { console.error(err) }
        finally { }
    }
    getToken() {
        return this.getTokenLocal() || this.getTokenSession()|| '';
    }

    removeToken() {
        localStorage.removeItem(this.token);
        sessionStorage.removeItem(this.token);
    }

    setTokenSession(userToken: string) {
        const token = 'token'
        sessionStorage.setItem(token, userToken);
    }

    getTokenSession() {
        return sessionStorage.getItem(this.token);
    }

    setTokenLocal(userToken: string) {
        const token = 'token'
        localStorage.setItem(token, userToken);
    }

    getTokenLocal() {
        return localStorage.getItem(this.token);

    }

    refreshToken(token: string) {
        if (this.getTokenLocal()) {
            this.setTokenLocal(token)
        }
        else if (this.getTokenSession()) {
            this.setTokenSession(token)
        }
    }
}
export default new LogIn();