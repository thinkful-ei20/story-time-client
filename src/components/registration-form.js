import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

import './styles/registration-form.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

//if (!this.props.dispatch) return <h1>UNCONNECTED</h1>;

export class RegistrationForm extends React.Component {

	onSubmit({username, password, firstName, lastName}) {

		const user = {username, password, firstName, lastName};

		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(username, password)));
	}

	render() {
		return (
			<form
				className="registration-form"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor="firstName">First name</label>
				<Field
					className="registration-form-input"
					component={Input}
					type="text"
					name="firstName"
				/>
				<label htmlFor="lastName">Last name</label>
				<Field
					className="registration-form-input"
					component={Input}
					type="text"
					name="lastName" 
				/>
				<label htmlFor="username">Username</label>
				<Field
					className="registration-form-input"
					component={Input}
					type="text"
					name="username"
					validate={[required, nonEmpty, isTrimmed]}
				/>
				<label htmlFor="password">Password</label>
				<Field
					className="registration-form-input"
					component={Input}
					type="password"
					name="password"
					validate={[required, passwordLength, isTrimmed]}
				/>
				<label htmlFor="passwordConfirm">Confirm password</label>
				<Field
					className="registration-form-input"
					component={Input}
					type="password"
					name="passwordConfirm"
					validate={[required, nonEmpty, matchesPassword]}
				/>
				<div className="button-holder">
					<button
						type="submit"
						className="registration-btn"
						disabled={this.props.pristine || this.props.submitting}>
						Register
					</button>
				</div>
			</form>
		);
	}
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) => {
		console.log(errors);
		dispatch(focus('registration', Object.keys(errors)[0]));
	}
})(RegistrationForm);