import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {setStory} from '../actions/stories';

import './styles/top-navigation-bar.css';

class TopNavigationBar extends Component {
	render() {
		return(
			<nav>
				<ul>
					<li className="link">
						<Link onClick={() => this.props.dispatch(setStory(null))} to="/">home</Link>
					</li>
					<li className="link">
						<Link onClick={() => this.props.dispatch(setStory(null))} to="/about">about</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default connect()(TopNavigationBar);