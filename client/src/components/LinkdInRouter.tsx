import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CardsDetails from './CardsDetail'


export default function RecruiterRouter() {
  return (
    <div>
      
        <Switch>
          <Route path="/recruiter/checkpoint" ><CardsDetails/></Route>
          <Route path="/recruiter/test">test</Route>
          <Route path="/"></Route>
        </Switch>
      
    </div>
  );
}
