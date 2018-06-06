import React from 'react';
import MainDisplay from '../main-display';
import {shallow} from 'enzyme';

describe('<MainDisplay />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<MainDisplay />);
	});
});