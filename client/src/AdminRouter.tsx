import React from 'react';
//Admin page
import AdminPage from './pages/admin-page'
//Home page
import Home from './pages/home-page/Home'
//HR page
import Student from './pages/student-page/Student'
import SpecificStudent from './components/specificStudent/SpecificStudent'  
import HrSteps from './components/steps/HrSteps'

import LinkdInRouter from './components/LinkdIn'
import JobCards from './pages/CompanyZone/JobCards'
import StuSteps from './components/steps/StuSteps'
import StudentPersonal from './pages/personal-page/Student-Personal'
import JobEditPage from './pages/CompanyZone/JobEditPage'



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
      <Route path="/hr">
        <JobCards />
      </Route>
      <Route path="/JobEditPage">
        <JobEditPage/>
      </Route>
       
      <Route path="/signUp/hr/:token/:id">
       <HrSteps/>
      </Route>
      < Route path="/recruiter">
        <LinkdInRouter />
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