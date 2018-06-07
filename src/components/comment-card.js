import React, {Component} from 'react';
import {connect} from 'react-redux';

import './styles/comment-card.css';

export class CommentCard extends Component {
	render() {
		return(
			<li className="comment-card">Hey, I am a comment</li>
		);
	}
}

export default connect()(CommentCard);