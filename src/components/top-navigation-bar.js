import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import './styles/top-navigation-bar.css';

class TopNavigationBar extends Component {
	render() {
		return(
			<nav className="navlinks">
				<ul>
					<li className="link">
						<Link to="/">Home</Link>
					</li>
					<li className="link">
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default TopNavigationBar;