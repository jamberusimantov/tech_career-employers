import http from './http.utils'
import login from './login.utils'
import * as app from '../app.utils'
import * as company from './drafts/company.utils'
import * as hr from './drafts/hr.utils'
import * as student from './drafts/student.utils'
import * as jobOffer from './drafts/jobOffer.utils'

const service = { app, login, company, hr, jobOffer, http,student}
export default service