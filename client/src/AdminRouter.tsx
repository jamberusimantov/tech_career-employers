import React from 'react';
//Admin page
import AdminPage from './pages/admin-page/AdminPage'
//Home page
import Home from './pages/home-page/Home'
//HR page
import Student from './pages/student-page/Student'
import SpecificStudent from './components/specificStudent/SpecificStudent'  
import HrRegisterForm from './pages/hr-page/Hr-Register'

import LinkdInRouter from './components/LinkdIn'
import StuSteps from './components/steps/StuSteps'
import StudentPersonal from './pages/personal-page/Student-Personal'


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
      <Route path="/signUp/hr/:token/:id">
       <HrRegisterForm/>
      </Route>
     < Route path="/recruiter">
            <LinkdInRouter/>
          </Route>
      <Route path="/signUp/company">
      </Route>
      <Route path="/student">
        <Student />
      </Route>
      <Route path="/studentPage/:id">
        <SpecificStudent />
      </Route>
      <Route path="/signUp/student/:token/:id">
       <StuSteps/>
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>
      <Route path="/privatestudent">
        <StudentPersonal />
      </Route>
    </Switch>
  )

}

export default AdminRouter;


