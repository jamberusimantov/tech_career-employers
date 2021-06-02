import React from 'react';

//Admin page
import AdminPage from './pages/admin-page/AdminPage'

//Home pages
import Home from './pages/home-page/Home'
import HrRegister from './pages/hr-page/Hr-Register'
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
        </Switch>
    )
}

export default AdminRouter;


