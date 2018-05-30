import React, { Component } from 'react';
import

import TopNavigationBar from './top-navigation-bar';
import LoginForm from './login-form';

import './styles/site-header.css';

class SiteHeader extends Component {
	render() {
		if
		return(
			<header>
				<h1>StoryTime</h1>
				<TopNavigationBar/>
				<LoginForm/>
			</header>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SiteHeader);
