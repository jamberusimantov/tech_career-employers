import React from "react";
import { Switch, Route } from "react-router-dom";

import CardsDetails from './job-cards/CardsDetail'
import CardsDetails2 from './job-cards/CardsDetals2'
import CardsDetails3 from './job-cards/CardsDetails3'
import CardsDetails4 from './job-cards/CardsDetals4'
import CardsDetails5 from './job-cards/CardsDetals5'


export default function RecruiterRouter() {
  return (
    <div>
      
        <Switch>
          <Route path="/recruiter/1" ><CardsDetails/></Route>
          <Route path="/recruiter/2" ><CardsDetails2/></Route>
          <Route path="/recruiter/3" ><CardsDetails3/></Route>
          <Route path="/recruiter/4" ><CardsDetails4/></Route>
          <Route path="/recruiter/5" ><CardsDetails5/></Route>
          <Route path="/recruiter/test">test</Route>
          <Route path="/"></Route>
        </Switch>
      
    </div>
  );
}
