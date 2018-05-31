import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from './search';

import './styles/action-bar.css';

class ActionBar extends Component {

	renderSubmitButton() {
		return(
			<button>Submit A Work!</button>
		);
	}
	render() {
		const submitButton = this.props.loggedIn ? this.renderSubmitButton() : undefined;
		return(
			<div className="action-bar">
				{<Search/>}
				{submitButton}
			</div>
		);
	}
}
const mapStateToProps = state => ({
	loggedIn : state.auth.loggedIn
});

export default connect(mapStateToProps)(ActionBar);