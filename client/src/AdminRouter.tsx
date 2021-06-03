import React from 'react';

//Admin page
import AdminPage from './pages/admin-page/AdminPage'

<<<<<<< HEAD
//Home page
import Home from './pages/home/Home'

//HR page
import HR from './pages/hr-page/Hr-Register'
=======
//Home pages
import Home from './pages/home-page/Home'
import HrRegister from './pages/hr-page/Hr-Register'
import Student from './pages/student-page/Student'

>>>>>>> 6be4cc1981429c1dc59f2af633d6de1c2e7dfa92

import Student from './pages/student-page/Student'
import {
    Switch,
    Route
  } from "react-router-dom";


function AdminRouter() {

    return (
          <Switch>
              <Route exact path="/">
            {/* <Home/> */}
          </Route>
          <Route path="/hr">
            <HrRegister/>
          </Route>
          <Route path="/student">
            <Student/>
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


