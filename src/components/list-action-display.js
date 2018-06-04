import React, { Component } from 'react';

import ActionBar from './action-bar';
import ControlPanel from './control-panel';
import StoryList from './story-list';

import './styles/list-action-display.css';

class ListActionDisplay extends Component {
	render() {
		return(
			<div className="action-display-main">
				<h2 className="action-display-header">
					Browse The Short Stories
				</h2>
				<ActionBar/>
				<div className="action-display-controller">
					{/* <ControlPanel/> */}
					<StoryList/>
				</div>
			</div>
		);
	}
}

export default ListActionDisplay;