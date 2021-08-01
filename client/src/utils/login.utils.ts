import { API } from '../app.utils';
import Http from './http.utils';
class LogIn {
    token = 'token';
    logList: any[] = [];

    async registerAdmin(credentials: { email: string }, role: string) {
        const url = `${API}/registration/register/${role}`
        const body = { user: credentials }
        try {
            return await Http.POST(url, body)
        } catch (error) { return error }
        finally { }
    }

    async registerStudent(credentials: { email: string }, role: string) {
        const url = `${API}/registration/register/${role}`
        const body = { user: credentials }
        try {
            return await Http.POST(url, body)
        } catch (error) { return error }
        finally { }
    }
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
        } catch (error) {
            console.error(error);
        }
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



//   //1. post User to db by admin
//   // registerUser({ company: 'google', email: 'jamber@google.com' }, 'hr')
//   // .then(data => {console.log(data.data.link)}); 


//   //2.get User Use Token
//   // const path = window.location.pathname
//   // const token = path.substr(path.lastIndexOf('/'))
//   // getUserUseToken(token)
//   //   .then(async (userData) => {
//   //     const { data: { company, isCompanyFirstUser } } = userData
//   //     if (company) {
//   //       console.log(`get Company by name: ${company}`);
//   //       const dbCompany = await getCompany({ name: company }, token)
//   //       if (!isCompanyFirstUser) {
//   //         console.log('company already exist');
//   //         return { dbCompany, userData }
//   //       }
//   //       console.log('company awaiting for signUp');
//   //       return { dbCompany, userData }
//   //     }
//   //     return {userData}
//   //   }).then(data => console.log(data))


//   //3. update user to db by user regFlow 
//   // const user = {
//   //   email: "jamber@google.com",
//   //   name: "siman tov the 3RD ",
//   //   phone: "1800codeit",
//   //   password: "123456",
//   //   password1: "123456"
//   // }
//   // const company = {
//   //   field: 'internet',
//   //   info: 'best workplace by far',
//   //   phone: 'no need to call, we hear everything ;)',
//   //   address: '3260, herzel blvd, lod',
//   // }
//   // signUpUser({ company, user }, 'hr', token).then(data => console.log(data))

//   //4.login user to db
//   const user = {
//     email: "jamber@google.com",
//     password: "123456"
//   }

//   login.login.loginUser(user, 'hr').then((data:{token:string}) => {
//     data?.token && login.login.setTokenLocal(data?.token)
//     console.log(data)
//   })


