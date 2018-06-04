import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/story-card.css';

class StoryCard extends Component {

	render() {
		const {title, username, created_at, updated_at} = this.props;
		const date = new Date(updated_at);
		console.log(date);

		return(
			<li className="story-card">
				<div className="info">
					<div className="title-author">
						<h3 className="title">{title}</h3>
						<h4 className="author">{username}</h4>
					</div>
					<div className="date">
						<h5 className="created">{created_at}</h5>
						<h5 className="updated">{updated_at}</h5>
					</div>
				</div>
			</li>
		);
	}
}

export default connect()(StoryCard);