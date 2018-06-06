import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Input from './input';
import { searchStory } from '../actions/stories';

import './styles/search-bar.css';

class Search extends Component {

	onSubmit(value) {
		return this.props.dispatch(searchStory(value));
	}

	render() {
		return(
			<form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
				<div className="search-bar">
					<Field type="search" name="searchText" id="searchtext" component={Input} palceholder="Search for Stories" autocomplete="off"/>
					<button type="submit" title="Submit your search query">Search</button>
				</div>
			</form>
		);
	}
}

const mapStateToProps = state => ({
	searchText: state.view.searchText
});

//From reduxForm documentation https://redux-form.com/7.3.0/docs/faq/howtoconnect.md/
Search = connect(mapStateToProps)(Search);

export default reduxForm({
	form: 'search-text'
})(Search);