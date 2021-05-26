
//Admin page
import AdminPage from './pages/admin-page/AdminPage'

//Home page
import Home from './pages/Home/Home'

import {
    Switch,
    Route
  } from "react-router-dom";


function AdminRouter() {

    return (
          <Switch>
              <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/admin">
            <AdminPage/>
          </Route>
        </Switch>
    )
}

export default AdminRouter;


