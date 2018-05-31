import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import storiesReducer from './reducers/stories';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers({
		form: formReducer,
		auth: authReducer,
		story: storiesReducer,
	}),
	composeEnhancers(
		applyMiddleware(thunk),
	)
);

export default store;