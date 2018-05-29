import React, { Component } from 'react';
import './styles/app.css';
import SiteHeader from './site-header';

class App extends Component {
	render() {
		return (
			<div className="App">
				<SiteHeader/>
			</div>
		);
	}
}

export default App;
