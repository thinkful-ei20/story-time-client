import React, {Component} from 'react';
import {connect} from 'react-redux';

//import ActionBar from './action-bar';
import StoryList from './story-list';
import StoryView from './story-view';

import './styles/list-action-display.css';

export class ListActionDisplay extends Component {

	render() {

		if(this.props.story) {
			return (<StoryView/>);
		}

		return(
			<div className="action-display-main">
				<h2 className="action-display-header">
					Browse The Short Stories
				</h2>
				{/*<ActionBar/>*/}
				<div className="action-display-controller">
					<StoryList/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	story: JSON.stringify(state.view.story) !== '{}'
});

export default connect(mapStateToProps)(ListActionDisplay);