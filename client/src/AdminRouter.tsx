import React from 'react';
import pages from './pages';
import { Switch, Route } from "react-router-dom";





//Admin page
import AdminPage from './pages/admin-page'
//Home page
import Home from './pages/home-page/Home'
//HR page
import Student from './pages/student-page/Student'
import HrRegisterForm from './pages/hr-page/Hr-Register'
import JobCards from './pages/CompanyZone/JobCards'
import JobEditPage from './pages/CompanyZone/JobEditPage'
import AddJob from './pages/CompanyZone/AddJob';


import SpecificStudent from './components/specificStudent/SpecificStudent'
import LinkdIn from './components/job-cards/LinkdIn'
import StuSteps from './components/steps/StuSteps'

function AdminRouter() {
  const { Personal } = pages;


  return (

    <Switch>

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/hr">
        <JobCards />
      </Route>
      <Route path="/JobEditPage">
        <JobEditPage />
      </Route>
      <Route path="/addNewJob">
        <AddJob />
      </Route>
      <Route path="/signUp/hr/:token/:id">
        <HrRegisterForm />
      </Route>
      < Route path="/recruiter">
        <LinkdIn />
      </Route>
      <Route path="/signUp/company">
      </Route>
      <Route path="/student">
        <Student />
      </Route>

      <Route path="/signUp/student/:token/:id">
        <StuSteps />
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>


      <Route path="/studentPage/:id"><SpecificStudent /></Route>
      <Route path="/privatestudent"><Personal /></Route>
    </Switch>)
}

export default AdminRouter;