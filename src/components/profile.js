import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {clearAuth} from '../actions/auth';

import './styles/profile.css';

class Profile extends Component{
	render() {
		const user = this.props.currentUser;
		return(
			<div className="profile">
				{user.username}
				<Link to="/" role="button" onClick={() => this.props.dispatch(clearAuth())}>Logout</Link>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Profile);