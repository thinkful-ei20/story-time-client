import React from 'react';
import StoryCard from '../story-card';
import {shallow} from 'enzyme';

describe('<StoryCard />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<StoryCard />);
	});
});