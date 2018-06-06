import React from 'react';
import TopNavigationBar from '../top-navigation-bar';
import {shallow} from 'enzyme';

describe('<TopNavigationBar />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<TopNavigationBar />);
	});
});