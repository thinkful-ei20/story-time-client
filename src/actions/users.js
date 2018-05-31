import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerUser = user => dispatch => {
	return fetch(`${API_BASE_URL}/users`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(user)
	})
		.then(res => {
			return normalizeResponseErrors(res);
		})
		.then(res => {
			return res.json();
		})
		.then(res => console.log(res))
		.catch(err => {
			const {reason, message, location} = err;
			if (reason === 'ValidationError') {
				return Promise.reject(
					new SubmissionError({
						[location]: message
					})
				);
			}
		});
};