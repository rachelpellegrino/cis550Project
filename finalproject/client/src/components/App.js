import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Recommendations from './Recommendations';
import BestGenres from './BestGenres';
import Login from './Login';
import Landing from './Landing';
import SignUp from './SignUp';

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<Landing />
							)}
						/>
						<Route
							exact
							path="/dashboard"
							render={() => (
								<Dashboard />
							)}
						/>
						<Route
							path="/recommendations"
							render={() => (
								<Recommendations />
							)}
						/>
						<Route
							path="/bestgenres"
							render={() => (
								<BestGenres />
							)}
						/>
						<Route
							path="/login"
							render={() => (
								<Login />
							)}
						/>
						<Route
							path="/sign-up"
							render={() => (
								<SignUp />
							)}
						/>
						<Route
							path="/landing"
							render={() => (
								<Landing />
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}