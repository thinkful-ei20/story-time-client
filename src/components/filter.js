import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
//import Input from './input';

import './styles/control-panel.css';

export class Filter extends Component {

	onSubmit(value) {
		console.log(value);
	}

	render() {
		return(
			<form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}
				className="filter-container">
				<fieldset className="genre-fldst">
					<label htmlFor="genre">genre</label>
					<Field name="genre" id="genre" component="select">
						<option></option>
						<option value="horror">horror</option>
						<option value="comedy">comedy</option>
						<option value="sci-fi">sci-fi</option>
						<option value="mystery">mystery</option>
						<option value="fantasy">fantasy</option>
					</Field>
				</fieldset>
			</form>
		);
	}
}

const mapStateToProps = state => ({
	filter: state.view.filters
});

Filter = connect(mapStateToProps)(Filter);

export default reduxForm({
	form: 'filter'
})(Filter);