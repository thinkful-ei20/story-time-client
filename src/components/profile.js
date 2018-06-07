import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {clearAuth} from '../actions/auth';

import './styles/profile.css';

export class Profile extends Component{
	render() {
		const user = this.props.currentUser ? this.props.currentUser : 'Loading...';
		return(
			<div className="profile">
				<p className="profile-name">username: {user.username}</p>
				<Link to="/" className="logout" role="button" onClick={() => this.props.dispatch(clearAuth())}>Logout</Link>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Profile);