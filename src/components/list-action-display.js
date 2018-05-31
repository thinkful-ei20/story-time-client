import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActionBar from './action-bar';
import ControlPanel from './control-panel';
import StoryList from './story-list';

import './styles/list-action-display.css';

class ListActionDisplay extends Component {
	render() {
		let AddStoryButton;
		if(this.props.loggedIn){
			AddStoryButton = <button className="add-story">Submit A Work</button>;
		}
		return(
			<div className="action-display-main">
				<h2 className="action-display-header">
					Browse The Short Stories
				</h2>
				<ActionBar/>
				<div className="action-display-controller">
					<ControlPanel/>
					<StoryList/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(ListActionDisplay);