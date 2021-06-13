import React,{useState,useContext} from "react";
import { Switch, Route,useParams } from "react-router-dom";
import { idText } from "typescript";

import CardsDetail from "./CardsDetail";

export default function RecruiterRouter({UserInfo}:any) {
  
  
  
  let { _id }:any = useParams();
  return (
    <div>
      <Switch>
        <Route path={`/`}>
          <CardsDetail UserInfo={UserInfo} />
        </Route>
        <Route path={`/recruiter/:${_id}`}>
          <CardsDetail  UserInfo={UserInfo} />
        </Route>
      </Switch>
    </div>
  );
}


