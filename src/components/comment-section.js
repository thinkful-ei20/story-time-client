import React, {Component} from 'react';
//import {connect} from 'react-redux';

import CommentCard from './comment-card';

import './styles/comment-section.css';

export class CommentSection extends Component {
	render() {
		const comments = [<CommentCard key={123123}/>];
		return(
			<div className="comments-section">
				<h5>This is the Comment Section!</h5>
				<ul className="comment-list">
					{comments}
				</ul>
			</div>
		);
	}
}

// export default connect()(CommentSection);
export default CommentSection;