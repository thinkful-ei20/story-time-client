import React, {Component} from 'react';

import ActionBar from './action-bar';
import StoryList from './story-list';

class ListActionDisplay extends Component {

	render() {
		return(
			<div className="action-display-main">
				<h2 className="action-display-header">
					Browse The Short Stories
				</h2>
				<ActionBar/>
				<div className="action-display-controller">
					<StoryList/>
				</div>
			</div>
		);
	}
}

export default ListActionDisplay;