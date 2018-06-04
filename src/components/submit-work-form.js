import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field,focus} from 'redux-form';

import {submitStory} from '../actions/stories';

import './styles/submit-work-form.css';

class SubmitWorkForm extends Component {
	onSubmit(values) {
		const {title, genre, storyText} = values;
		const story = {
			title,
			genre,
			text: storyText['text']
		};
		console.log(story);
		return this.props
			.dispatch(submitStory(story));
	}
	render() {
		return(
			<form
				className="submit-work-form"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<fieldset className="title-fldst">
					<label htmlFor="title">title</label>
					<Field component="input" type="text" id="title" name="title"/>
				</fieldset>
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
				<fieldset className="text-fldst">
					<label htmlFor="storytext">text</label>
					<Field
						placeholder="Your Story begins here"
						component="textarea"
						name="story[text]"
						id="storytext"
						autoComplete="off"
						autoCorrect="off"
						autoCapitalize="off"
						spellCheck="true"
						rows="20"
						cols="10"
						role="textbox"
						aria-autocomplete="list"
						aria-haspopup="true"
					/>
				</fieldset>
				<button className="submit-btn" type="submit">Submit Story</button>
			</form>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
});

SubmitWorkForm = connect(mapStateToProps)(SubmitWorkForm);

export default reduxForm({
	form:'submitwork',
	onSubmitFail: (errors, dispatch) => {
		dispatch(focus('registration', Object.keys(errors)[0]));
	}
})(SubmitWorkForm);