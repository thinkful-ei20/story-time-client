import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {setStory} from '../actions/stories';

import './styles/navigation-bar.css';

export class NavigationBar extends Component {
	render() {
		const resetStory = {};
		return(
			<nav>
				<ul>
					<li className="link">
						<Link onClick={() => this.props.dispatch(setStory(resetStory))} to="/">home</Link>
					</li>
					<li className="link">
						<Link onClick={() => this.props.dispatch(setStory(resetStory))} to="/about">about</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default connect()(NavigationBar);