import React from 'react';
import ActionBar from '../action-bar';
import {shallow} from 'enzyme';

describe('<ActionBar />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<ActionBar />);
	});
});