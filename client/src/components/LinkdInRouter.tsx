import React from "react";
import { Switch, Route,useParams } from "react-router-dom";
import { idText } from "typescript";

import CardsDetails from "./CardsDetail";

export default function RecruiterRouter() {
  let { id }:any = useParams();
  return (
    <div>
      <Switch>
        <Route path={`/recruiter/:${id}`}>
          <CardsDetails />
        </Route>
      </Switch>
    </div>
  );
}


