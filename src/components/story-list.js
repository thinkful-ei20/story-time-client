import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoryCard from './story-card';

import './styles/story-list.css';

class StoryList extends Component {
	componentDidMount(){
		//console.log(this.props);
	}
	render() {
		const stories = this.props.stories.map((story, i) => {
			return <StoryCard key={i} {...story}/>;
		});

		return (
			<ul className="story-list">
				{stories}
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	stories: state.story.stories
});

export default connect(mapStateToProps)(StoryList);