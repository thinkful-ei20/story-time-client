import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field,focus} from 'redux-form';
import {withRouter} from 'react-router-dom';

import {submitNewStory, submitEditedStory, setStory} from '../actions/stories';
import {required, nonEmpty} from '../validators';

import './styles/submit-work-form.css';

export class SubmitWorkForm extends Component {

	onSubmit(values) {
		//genres not implemented on the back end yet.
		const {title, text} = values;

		if(this.props.editing) {
			const storyObj = {
				id : this.props.initialValues.id,
				title,
				text
			};
			this.props.dispatch(submitEditedStory(storyObj))
				.then( res => {
					const story = res.story;
					const updatedStory = Object.assign({},story,{'username':this.props.currentUser.username});
					this.props.dispatch(setStory(updatedStory));
					this.props.history.push(`/${story.id}`);
				});

		} else {
			const storyObj = {title,text};
			this.props.dispatch(submitNewStory(storyObj))
				.then(res => {
					const story = res.story;
					const updatedStory = Object.assign({},story,{'username':this.props.currentUser.username});
					this.props.dispatch(setStory(updatedStory));
					this.props.history.push(`/${story.id}`);
				});
		}
	}

	render() {
		return(
			<form
				className="submit-work-form"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<fieldset className="title-fldst">
					<label htmlFor="title">title</label>
					<Field 
						component="input"
						type="text"
						id="title"
						placeholder="Title Goes Here!"
						name="title"
						validate={[required, nonEmpty]}
					/>
				</fieldset>
				<fieldset className="genre-fldst">
					<label htmlFor="genre">genre</label>
					<Field 
						name="genre"
						id="genre" 
						component="select" 
						validate={[required, nonEmpty]}
					>
						<option>SELECT YOUR GENRE</option>
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
						placeholder='Story Goes Here!'
						component="textarea"
						validate={[required, nonEmpty]}
						name="text"
						id="text"
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
				<button className="submit-btn" type="submit" disabled={this.props.pristine || this.props.submitting}>Submit Story</button>
			</form>
		);
	}
}

SubmitWorkForm = reduxForm({
	form:'submitwork'
})(SubmitWorkForm);

SubmitWorkForm = connect(state => ({
	currentUser: state.auth.currentUser,
	editing: state.view.editing,
	initialValues: state.view.story ? state.view.story : {title:'', text: '', genre:''},
}))(SubmitWorkForm);

export default withRouter(SubmitWorkForm);