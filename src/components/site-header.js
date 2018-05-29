import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/site-header.css';
import Home from './home';
import About from './about';

class SiteHeader extends Component {
	render() {
		return(
			<Router>
				<div>this will be the site header</div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
				<Route exact path='/' component={Home}/>
				<Route exact path='/' component={About}/>
			</Router>
		);
	}
}

export default SiteHeader;