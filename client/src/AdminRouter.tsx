//Pages
import AdminPage from "./pages/admin-page/AdminPage";
import Home from "./pages/Home/Home";
import JobsList from "./pages/JobsList";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function AdminRouter() {
  return (
    
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/recruiter">
          <JobsList />
        </Route>
      </Switch>
    
  );
}

export default AdminRouter;
