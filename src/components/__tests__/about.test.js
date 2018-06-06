import React from 'react';
import About from '../about';
import {shallow} from 'enzyme';

describe('<About />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<About />);
	});
});