import React, {Component} from 'react';
import {connect} from 'react-redux';

import ErrorMessage from './error-message';
import MainDisplay from './main-display';
import {fetchStories} from '../actions/stories';

import './styles/main.css';

class Home extends Component {
	render() {
		const component = !this.props.error ? <MainDisplay/> : <ErrorMessage error={this.props.error}/>;
		return(
			<main className="main">
				{component}
			</main>
		);
	}
}

const mapStateToProps = state => ({
	error: state.view.error
});

export default connect(mapStateToProps)(Home);