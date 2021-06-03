import http from './http.utils'
import login from './login.utils'
import * as app from '../app.utils'
import * as company from './company.utils'
import * as hr from './hr.utils'
import * as jobOffer from './jobOffer.utils'
import * as student from './student.utils'

const service = { app, login, company, hr, jobOffer, http, student}
export default service