import React from 'react';
import StoryView from '../story-view';
import {shallow} from 'enzyme';

describe('<StoryView />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<StoryView />);
	});
});