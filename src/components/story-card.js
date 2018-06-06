import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {setStory} from '../actions/stories';

import './styles/story-card.css';

class StoryCard extends Component {

	onClick(storyId) {
		console.log(storyId);
		this.props.dispatch(setStory(storyId));
		this.props.history.push(`/${storyId}`);
	}

	render() {

		const {title, username, created_at, updated_at, id} = this.props;
		const date_updated = new Date(updated_at).toDateString();
		const date_created = new Date(created_at).toDateString();

		return(
			<li className="story-card" onClick={() => this.onClick(id) }>
				<div className="info">
					<div className="title-author">
						<h3 className="card-title">{title}</h3>
						<h4 className="card-author">{username}</h4>
					</div>
					<div className="date">
						<h5 className="card-created">{`written: ${date_created}`}</h5>
						<h5 className="card-updated">{`edited: ${date_updated}`}</h5>
					</div>
				</div>
			</li>
		);
	}
}

export default withRouter(connect()(StoryCard));