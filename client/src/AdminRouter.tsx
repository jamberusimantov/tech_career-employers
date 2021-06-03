
//Admin page
import AdminPage from './pages/admin-page/AdminPage'

//Home page
import Home from './pages/home/Home'

//HR page
import HR from './pages/hr-page/Hr-Register'

import Student from './pages/student-page/Student'
import {
    Switch,
    Route
  } from "react-router-dom";


function AdminRouter() {

    return (
          <Switch>
              <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/hr">
            <HR/>
          </Route>
          <Route path="/admin">
            <AdminPage/>
          </Route>
          <Route path="/student">
            <Student/>
          </Route>
          
        </Switch>
    )
}

export default AdminRouter;


