import React from 'react';
import App from '../app';
import {shallow} from 'enzyme';

describe('<App />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<App />);
	});

	// it('For Shallow DOM rendering... ', function() {
	// 	const someState = {};
	// 	const wrapper = shallow(<App/>);
	// 	/**GOOD FOR DEBUGING*/
	// 	//console.log(wrapper.debug());

	// 	//wrapper.setState({ someState });
	// 	//const itemList = wrapper.find('.selector');
	// 	//expect(itemList.length).toEqual(items.length);
	// 	//itemList.forEach((item, index) => expect(item.text()).toEqual(items[index]))	
	// });

	// it('For Full DOM rendering...', function() {
	// 	const someState = {};
	// 	const wrapper = mount(<App />);
	// 	const toAdd = 'Item';

	// 	/**GOOD FOR DEBUGING*/
	// 	//console.log(wrapper.debug());

	// 	//wrapper.setState({ someState });
	// 	//const someInput = wrapper.find('.selector');
	// 	//console.log(someInput.debug());
	// 	//someInput.instance().value = toAdd;

	// 	/** Generally, we want to simulate the event that gets triggered i.e onSubmit, onClick, onBlur ect... */
	// 	//const form = wrapper.find('.form-class');
	// 	//form.simulate('submit');
	// 	//console.log(wrapper.debug());

	// 	/**After all this, we want to make our assertions */
	// 	const newItems = [...items, toAdd];
	// 	//expect(wrapper.state('items').toEqual(newItems));


	// });
});