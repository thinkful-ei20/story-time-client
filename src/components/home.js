import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchStories } from '../actions/stories';

import ListActionDisplay from './list-action-display';

import './styles/main.css';

class Home extends Component {
	componentDidMount() {
		this.props.dispatch(fetchStories());
	}
	render() {
		return(
			<main className="main">
				<ListActionDisplay/>
			</main>
		);
	}
}

export default connect()(Home);