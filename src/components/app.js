import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteHeader from './site-header';
import Home from './home';
import About from './about';
import RegistrationPage from './registration-page';
import SubmitWorkForm from './submit-work-form';
import DoesNotExist from './does-not-exist';
import AuthRoute from './auth-route';

import './styles/app.css';

class App extends Component {

	render() {
		return (
			<div className="app">
				<SiteHeader/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/register" component={RegistrationPage}/>
					<AuthRoute exact path="/submit" component={SubmitWorkForm} loggedIn={this.props.loggedIn}/>
					<Route render={() => DoesNotExist()}/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
