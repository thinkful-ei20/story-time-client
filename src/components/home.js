import React, {Component} from 'react';
import {connect} from 'react-redux';

import ErrorMessage from './error-message';
import ListActionDisplay from './list-action-display';

import './styles/home.css';

export class Home extends Component {
	render() {
		const component = !this.props.error ? <ListActionDisplay/> : <ErrorMessage error={this.props.error}/>;
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