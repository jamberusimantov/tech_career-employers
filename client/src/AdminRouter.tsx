import React from 'react';
//Admin page
import AdminPage from './pages/admin-page/AdminPage'
//Home page
import Home from './pages/Home/Home'
//HR page
import HrRegisterForm from './pages/hr-page/Hr-Register'
import CompanyRegister from './pages/hr-page/Company-register'
import Student from './pages/student-page/Student'
import SpecificStudent from './components/specificStudent/SpecificStudent'

import {
  Switch,
  Route
} from "react-router-dom";
import JobCards from './pages/CompanyZone/JobCards';
import JobEditPage from './pages/CompanyZone/JobEditPage';



function AdminRouter() {


  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/hr">
        <JobCards />
      </Route>
      {/* <Route exact path="/JobCards">
        <JobCards />
      </Route> */}
      <Route exact path="/JobEditPage">
        <JobEditPage />
      </Route>
      <Route path="/student">
        <Student />
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>
    </Switch>
  )
}

export default AdminRouter;


