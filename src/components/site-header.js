import React, { Component } from 'react';
import {connect} from 'react-redux';
import TopNavigationBar from './top-navigation-bar';
import LoginForm from './login-form';
import Profile from './profile';

import './styles/site-header.css';

class SiteHeader extends Component {
	render() {
		const HeaderComponent = this.props.loggedIn ? <Profile/> : <LoginForm/> ;
		return(
			<header>
				<div className="left-header">
					<h1>StoryTime</h1>
				</div>
				<div className="middle-header">
					<TopNavigationBar/>
				</div>
				<div className="right-header">
					{HeaderComponent}
				</div>
			</header>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SiteHeader);
