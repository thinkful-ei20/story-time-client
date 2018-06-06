import React from 'react';
import ErrorMessage from '../error-message';
import {shallow} from 'enzyme';

describe('<ErrorMessage />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<ErrorMessage />);
	});
});