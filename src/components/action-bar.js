import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Search from './search';
import Filter from './filter';

import './styles/action-bar.css';

export class ActionBar extends Component {

	renderSubmitButton() {
		return <Link to="/submit">Submit A Work!</Link>;
	}

	render() {
		const submitButton = this.props.loggedIn ? this.renderSubmitButton() : undefined;
		return(
			<div className="action-bar">
				{<Search/>}
				{<Filter/>}
				{submitButton}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn : state.auth.currentUser !== null
});

export default connect(mapStateToProps)(ActionBar);