import React from 'react';
//Admin page
import AdminPage from './pages/admin-page/AdminPage'
//Home page
import Home from './pages/Home/Home'
//HR page
import HrRegisterForm from './pages/hr-page/Hr-Register'
import CompanyRegister from './pages/hr-page/Company-register'
import RegisterIndex from './pages/hr-page/RegisterIndex'
import Student from './pages/student-page/Student'
import SpecificStudent from './components/specificStudent/SpecificStudent'  
import HrSteps from './components/steps/HrSteps'

import {
  Switch,
  Route
} from "react-router-dom";


function AdminRouter() {


  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signUp/hr">
       <HrSteps/>
      </Route>
      <Route path="/signUp/company">
      </Route>
      <Route path="/student">
        <Student />
      </Route>
      <Route path="/studentPage/:id">
        <SpecificStudent />
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>
    </Switch>
  )

}

export default AdminRouter;


