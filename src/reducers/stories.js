
import {
	STORY_REQUEST,
	STORY_SUCCESS,
	STORY_ERROR,
	SET_STORY,
	ADD_STORY,
	EDIT_STORY,
	SEARCH_STORY
} from '../actions/action-types';

const initialState = {
	stories: [],
	story: {},
	loading: false,
	error: null,
	dialog: false,
	isEditing: false,
	isSubmitting: false,
	searchText: '',
};

export default function reducer (state=initialState, action) {

	if(action.type === STORY_REQUEST){
		return {
			...state,
			loading: true
		};
	}

	if(action.type === STORY_SUCCESS){
		return {
			...state,
			stories: action.stories,
			loading: false
		};
	}

	if(action.type === STORY_ERROR){
		return {
			...state,
			story: {},
			loading: false,
			error: action.error
		};
	}

	if(action.type === SET_STORY){
		return {
			...state,
			story: action.story
		};
	}

	if(action.type === ADD_STORY){
		return {
			...state,
			stories: [
				...state.stories,
				action.story
			]
		};
	}

	if(action.type === EDIT_STORY){
		return {
			...state,
			isEditing: true
		};
	}

	if(action.type === SEARCH_STORY){
		return {
			...state,
			searchText: action.searchText
		};
	}

	return state;
}

