
//Admin page
import AdminPage from './pages/admin-page/AdminPage'

//Home page
// import Home from './pages/Home/Home'

//HR page
import HR from './pages/hr-page/Hr-Register'

import {
    Switch,
    Route
  } from "react-router-dom";


function AdminRouter() {

    return (
          <Switch>
              <Route exact path="/">
            {/* <Home/> */}
          </Route>
          <Route path="/hr">
            <HR/>
          </Route>
          <Route path="/admin">
            <AdminPage/>
          </Route>
        </Switch>
    )
}

export default AdminRouter;


