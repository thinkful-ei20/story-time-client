import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavigationBar from './navigation-bar';
import LoginForm from './login-form';
import Profile from './profile';

import './styles/site-header.css';

export class SiteHeader extends Component {
	render() {
		const HeaderComponent = this.props.loggedIn ? <Profile/> : <LoginForm/> ;
		return(
			<header>
				<div className="left-header">
					<div className="left-header-left">
						<h1>StoryTime</h1>
					</div>
					<div className="left-header-right">
						<NavigationBar/>
					</div>
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
