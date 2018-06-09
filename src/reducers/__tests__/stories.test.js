import reducer from '../stories';

import {
	fetchStoryRequest,
	fetchStorySuccess,
	fetchStoriesSuccess,
	fetchStoryError,
	setStory,
	editStory,
	updateStory,
} from '../../actions/stories';

describe('Stories Reducer', () => {
	describe('setStory()', () => {	
		it('Should set the (story) property', () => {
			let state = {
				story:{}
			};

			const story = {text:'I am a story'};

			const newState = reducer( state, setStory(story));

			expect(newState.story).toEqual(story);
		});
	});

	describe('editStory()', () => {	
		it('Should set the (editing) property', () => {
			let state = {
				editing: false
			};

			const edit = true;

			const newState = reducer( state, editStory(edit));

			expect(newState.editing).toEqual(edit);
		});
	});

	describe('updateStory()', () => {	
		it('Should update the (story) and (stories) [if \'id\' matches]', () => {
			let state = {
				stories: [
					{
						id: 0,
						text: 'I am story 0'
					},
					{
						id: 1,
						text: 'I am story 1'
					},
					{
						id: 2,
						text: 'I am story 2'
					}
				],
				story: {}
			};

			const story = {
				id: 1,
				text: ' I am UPDATED story 1'
			};

			const newState = reducer( state, updateStory(story));

			expect(newState.stories[1]).toEqual(story);
			expect(newState.story).toEqual(story);
		});
	});

	describe('fetchStoryRequest()', () => {	
		it('Should set the (loading) property', () => {
			let state = {
				loading: false
			};

			const newState = reducer( state, fetchStoryRequest());

			expect(newState.loading).toEqual(true);
		});
	});

	describe('fetchStorySuccess()', () => {
		it('Should finish loading fetch and set the (story) property', () => {
			let state = {
				story: {},
				loading: true,
				error:'no error'
			};

			const story = {
				text: ' I am story'
			};

			const newState = reducer( state, fetchStorySuccess(story));

			expect(newState.story).toEqual(story);
			expect(newState.loading).toEqual(false);
			expect(newState.error).toEqual(null);

		});
	});

	describe('fetchStoriesSuccess()', () => {
		it('Should finish loading fetch and set the (stories) property', () => {
			let state = {
				stories: [],
				loading: true,
				error:'no error'
			};

			const stories = [
				{id: 0, text: 'I am story 0'},
				{id: 1, text: 'I am story 1'},
				{id: 2, text: 'I am story 2'}
			];

			const newState = reducer( state, fetchStoriesSuccess(stories));

			expect(newState.stories).toEqual(stories);
			expect(newState.loading).toEqual(false);
			expect(newState.error).toEqual(null);

		});
	});

	describe('fetchStoryError()', () => {
		it('Should finish loading set the (error) property', () => {
			let state = {
				error: null,
				loading: false
			};

			const error = Error('I am a fetchStoryError');

			const newState = reducer( state, fetchStoryError(error));

			expect(newState.error).toEqual(error);
			expect(newState.loading).toEqual(false);

		});
	});
});