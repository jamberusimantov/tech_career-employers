import React,{useState,useContext} from "react";
import { Switch, Route,useParams } from "react-router-dom";
import { idText } from "typescript";

import CardsDetail from "./CardsDetail";

export default function RecruiterRouter({UserInfo,firstJob}:any) {
  
  let { id }:any = useParams();
  return (
    <div>
      <Switch>
        <Route path={`/recruiter/job`}>
          <CardsDetail UserInfo={UserInfo} />
        </Route>
        <Route path={`/recruiter/:${id}`}>
          <CardsDetail  UserInfo={UserInfo}/>
        </Route>
      </Switch>
    </div>
  );
}


