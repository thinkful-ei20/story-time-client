import React from 'react';
import SubmitWorkForm from '../submit-work-form';
import {shallow} from 'enzyme';

describe('<SubmitWorkForm />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<SubmitWorkForm />);
	});
});