import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import './styles/top-navigation-bar.css';

class TopNavigationBar extends Component {
	render() {
		return(
			<nav>
				<ul>
					<li className="link">
						<Link to="/">home</Link>
					</li>
					<li className="link">
						<Link to="/about">about</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default TopNavigationBar;