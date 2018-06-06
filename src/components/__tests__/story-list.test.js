import React from 'react';
import StoryList from '../story-list';
import {shallow} from 'enzyme';

describe('<StoryList />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<StoryList />);
	});
});