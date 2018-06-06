import React, {Component} from 'react';
import {Route,withRouter,Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import SiteHeader from './site-header';
import Home from './home';
import About from './about';
import StoryView from './story-view';
import RegistrationPage from './registration-page';
import SubmitWorkForm from './submit-work-form';
import DoesNotExist from './does-not-exist';
import AuthRoute from './auth-route';

import './styles/app.css';

export class App extends Component {
	render() {
		return (
			<div className="app">
				<SiteHeader/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<AuthRoute exact path="/submit" component={SubmitWorkForm} loggedIn={this.props.loggedIn}/>
					<Route path="/about" component={About}/>
					<Route path="/:id" component={StoryView}/>
					<Route path="/register" component={RegistrationPage}/>
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
