import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';

import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

import './styles/login-form.css';

class LoginForm extends Component {

	onSubmit(values) {
		return this.props.dispatch(login(values.username, values.password));
	}

	render() {
		let error;
		if(this.props.error) {
			error = (
				<div className="login-form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		}
		return (
			<form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				{error}
				<Field className="login-form-input" component={Input} type="text" name="username" id="username" placeholder="username" aria-label="username" validate={[required, nonEmpty]}/>
				<Field className="login-form-input" component={Input} type="text" name="password" id="password" placeholder="password" aria-label="password" validate={[required, nonEmpty]}/>
				<button className="login-in-btn" disabled={this.props.pristine || this.props.submitting}>Log In</button>
				<Link className="sing-up" to="/register">Sign Up</Link>
			</form>
		);
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', Object.keys(errors)[0]))
})(LoginForm);