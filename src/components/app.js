import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteHeader from './site-header';
import Home from './home';
import About from './about';
import RegistrationPage from './registration-page';

import './styles/app.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<SiteHeader/>
				<Route exact path="/" component={Home}/>
				<Route exact path="/about" component={About}/>
				<Route exact path="/register" component={RegistrationPage}/>
			</div>
		);
	}
}

export default withRouter(connect()(App));
