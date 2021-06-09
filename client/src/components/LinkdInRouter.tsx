import React,{useState,useContext} from "react";
import { Switch, Route,useParams } from "react-router-dom";
import { idText } from "typescript";

import CardsDetails from "./job-cards/CardsDetail";

export default function RecruiterRouter({UserInfo,firstJob}:any) {
  
  let { id }:any = useParams();
  return (
    <div>
      <Switch>
        <Route path={`/recruiter/job`}>
          <CardsDetails UserInfo={firstJob} />
        </Route>
        <Route path={`/recruiter/:${id}`}>
          <CardsDetails  UserInfo={UserInfo}/>
        </Route>
      </Switch>
    </div>
  );
}


