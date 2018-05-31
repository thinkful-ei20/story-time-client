import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import './styles/search.css'

class Search extends Component {

	onChange(e) {
		return this.props.dispatch(searchStory(e.target.value));
	}

	render() {
		return(
			<form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
				<label htmlFor="searchText">Search</label>
				<input type="text" name="serchText" id="searchText" placeholder="Search..." onChange={e => this.onChange(e)} value={this.props.searchText}/>
			</form>
		);
	}
}

const mapStateToProps = state => ({
	searchText: state.story.searchText
});

export default reduxForm({
	form: 'search',
	onSubmitFail: (errors, dispatch) => {
		dispatch(focus('search', 'searchText'));
	}
})(Search);