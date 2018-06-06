import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import CommentSection from './comment-section';
import {fetchStory, setStory, editStory} from '../actions/stories';

import './styles/story-view.css';

class StoryView extends Component {

	componentDidMount() {
		if(!this.props.story) {
			this.props.dispatch(fetchStory(this.props.match.params.id));
		}
	}

	onClickEdit() {
		this.props.dispatch(editStory());
		this.props.history.push('/submit');
	}

	render() {

		if(this.props.loading) {
			return (
				<div className="story-view-container">
					<h2>Loading...</h2>
				</div>
			)
		}

		const edit = this.props.isOwner ? <button className="edit-btn" onClick={() => this.onClickEdit()}>Edit</button> : undefined;

		return(
			<div className="story-view-container">
				<div className="story-container">
					<div className="info-container">
						<div className="story-title-author">
							<h3 className="story-title">{this.props.story.title}</h3>
							<h4 className="story-author">{`By: ${this.props.story.username}`}</h4>
							{edit}
						</div>
					</div>
					<div className="story-text">
						<p>{this.props.story.text}</p>
					</div>
					<CommentSection/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	isOwner: state.auth.currentUser !== null && state.auth.currentUser.username === state.view.story.username,
	loading: state.view.loading,
	story: JSON.stringify(state.view.story) !== '{}' ? state.view.story :  undefined
});

export default withRouter(connect(mapStateToProps)(StoryView));
