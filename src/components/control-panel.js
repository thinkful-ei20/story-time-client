import React, { Component } from 'react';

import './styles/control-panel.css';

class ControlPanel extends Component {
	render() {
		return(
			<div className="panel-container">
				<h4 className="panel-header">Filters</h4>
				<div className="filters">
					<a className="filter horror" data-filter="green" href="#" role="button">horror</a>
					<a className="filter fantasy" data-filter="blue" href="#" role="button">fantasy</a>
					<a className="filter sci-fi" data-filter="red" href="#" role="button">sci-fi</a>
					<a className="filter comedy" data-filter="red" href="#" role="button">comedy</a>
					<a className="filter mystery" data-filter="red" href="#" role="button">mystery</a>
					<a className="filter poetry" data-filter="red" href="#" role="button">poetry</a>
				</div>
			</div>
		);
	}
}

export default ControlPanel;