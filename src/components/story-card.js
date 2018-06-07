import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {setStory} from '../actions/stories';

import './styles/story-card.css';

export class StoryCard extends Component {

	onClick(story) {
		this.props.dispatch(setStory(story));
		this.props.history.push(`/${story.id}`);
	}

	render() {

		const {story} = this.props;
		const date_updated = new Date(story.updated_at).toDateString();
		const date_created = new Date(story.created_at).toDateString();

		return(
			<li className="story-card" onClick={() => this.onClick(story) }>
				<div className="info">
					<div className="title-author">
						<h3 className="card-title">{story.title}</h3>
						<h4 className="card-author">{story.username}</h4>
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