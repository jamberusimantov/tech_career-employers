import React from 'react';

//Admin page
import AdminPage from './pages/admin-page/AdminPage'

//Home pages
import Home from './pages/home-page/Home'
import HR from './pages/hr-page/Hr'
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
            <HR/>
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


