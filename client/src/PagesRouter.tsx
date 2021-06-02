import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import React from 'react';
import Home from './pages/Home/Home';
import AdminPage from './pages/admin-page/AdminPage';
import Hr from './pages/hr-page/Hr';
import Students from './pages/students-page/Students';


export default function PagesRouter() {
	return (
			<Router>
		<div className="router">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/admin">
						<AdminPage />
					</Route>
					<Route exact path="/hr">
						<Hr />
					</Route>
					<Route exact path="/students" >
					<Students />
					</Route>

				</Switch>
		</div>
			</Router>
	);
}
