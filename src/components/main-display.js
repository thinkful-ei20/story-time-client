import React, {Component} from 'react';
import {connect} from 'react-redux';

import ListActionDisplay from './list-action-display';
import StoryView from './story-view';

import './styles/list-action-display.css';

class MainDisplay extends Component {
	render() {
		let component = this.props.selectedStory ? <StoryView/> : <ListActionDisplay/>;

		return(
			<div className="action-display-main">
				{component}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	selectedStory: JSON.stringify(state.view.story) !== '{}',
});

export default connect(mapStateToProps)(MainDisplay);