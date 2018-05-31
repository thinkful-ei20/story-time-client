import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/story-card.css';

class StoryCard extends Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		const {title, text, uid, created_at} = this.props;
		return(
			<li className="story-card">
				<h3 className="story-title">{title}</h3>
				<h4 className="author">{uid}</h4>
				<h5 className="created-at">{created_at}</h5>
			</li>
		);
	}
}

export default connect()(StoryCard);