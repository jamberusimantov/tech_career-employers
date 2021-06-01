import * as app from '../app.utils'
import * as login from './login.service'
import * as hr from './hr.service'
import * as jobOffer from './jobOffer.service'
import * as student from './students.service'

const service = { app, login, hr,jobOffer,student }
export default service