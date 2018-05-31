import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

import {
	STORY_REQUEST,
	STORY_SUCCESS,
	STORY_ERROR,
	SET_STORY,
	UPDATE_STORY,
	EDIT_STORY,
	ADD_STORY } from './action-types';


export const fetchStoryRequest = () => ({
	type: STORY_REQUEST
});

export const fetchStorySuccess = stories => ({
	type: STORY_SUCCESS,
	stories
});

export const fetchStoryError = error => ({
	type: STORY_ERROR,
	error
});

export const setStory = story => ({
	type: SET_STORY,
	story
});

export const editStory = () => ({
	type: EDIT_STORY
});


export const addStory = story => ({
	type: ADD_STORY,
	story
});

// Async Action to fetch all stories
export const fetchStories = () => dispatch => {
	dispatch(fetchStoryRequest());
	return fetch(`${API_BASE_URL}/stories`)
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(stories => dispatch(fetchStorySuccess(stories)))
		.catch(err => dispatch(fetchStoryError(err)));
};

// Async Action to submit a single story
export const submitStory = story => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(fetchStoryRequest());
	return fetch(`${API_BASE_URL}/api/stories`,{
		method: 'POST',
		body: JSON.stringify(story),
		headers: {
			'Content-Type':'application/json',
			Authorization: `Bearer ${authToken}`
		},
		mode:'cors'
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(stories => dispatch(fetchStorySuccess(stories)))
		.catch(err => {
			const {code} = err;
			const message = code === 401 ? 'Unauthorized, please login to submit this story' : 'Unable to Submit, please try again';
			dispatch(fetchStoryError(err));
			return Promise.reject(
				new SubmissionError({
					_error: message
				})
			);
		});
};

// Async Action to update a single story
export const updateStory = story => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(fetchStoryRequest());
	return fetch(`${API_BASE_URL}/api/stories/${story.id}`,{
		method: 'PUT',
		body: JSON.stringify(story),
		headers: {
			'Content-Type':'application/json',
			Authorization: `Bearer ${authToken}`
		},
		mode:'cors'
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(stories => dispatch(fetchStorySuccess(stories)))
		.catch(err => {
			const {code} = err;
			const message = code === 401 ? 'Unauthorized, please login to submit this story' : 'Unable to Submit, please try again';
			dispatch(fetchStoryError(err));
			return Promise.reject(
				new SubmissionError({
					_error: message
				})
			);
		});
};