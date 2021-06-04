import React from 'react';

//Admin page
import AdminPage from './pages/admin-page/AdminPage'


//Home page
import Home from './pages/home/Home'
//HR page
import HrRegister from './pages/hr-page/Hr-Register'
import  CompanyRegister from './pages/hr-page/Company-register'

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


