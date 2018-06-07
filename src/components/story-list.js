import React, {Component} from 'react';
import {connect} from 'react-redux';

import StoryCard from './story-card';
import {fetchStories} from '../actions/stories';

import './styles/story-list.css';


export class StoryList extends Component {

	constructor(props) {
		super(props);
		props.dispatch(fetchStories());
	}

	render() {
		if(this.props.isLoading) {
			return(
				<h2>Loading...</h2>
			);
		}
		const stories = this.props.stories.map((story, i) => {
			return <StoryCard key={i} story={story}/>;
		});

		return (
			<ul className="story-list">
				{stories}
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	isLoading: state.view.loading,
	stories: state.view.stories
});

export default connect(mapStateToProps)(StoryList);