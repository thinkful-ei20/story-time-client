import React from 'react';

import {mount,shallow} from 'enzyme';

import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {App} from '../app';
import SiteHeader from '../site-header';
import Home from '../home';
import About from '../about';
import StoryView from '../story-view';
import RegistrationPage from '../registration-page';
import SubmitWorkForm from '../submit-work-form';
import DoesNotExist from '../does-not-exist';
import AuthRoute from '../auth-route';
import store from '../../store';


describe('<App />', () => {

	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<App />);
	});

	it( 'Should render the site header', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(SiteHeader)).toHaveLength(1);
	});

	describe('<App /> Routes', () => {

		let wrapper;

		beforeAll( function() {
			wrapper = component('/');
			console.log(wrapper.debug());
		});

		const component = path => {
			// return mount(
			// 	<MemoryRouter initialEntries={[path]}>
			// 		<Provider store={store}>
			// 			<App/>
			// 		</Provider>
			// 	</MemoryRouter>
			// );
			return mount(
				<Provider store={store}>
					<App/>
				</Provider>
			);
		};

		it( 'Should render the <Home/> component on path "/"', () => {
			console.log('DID I RUN?');
			// expect(wrapper.find(Home)).toHaveLength(1);
		});

	});

// describe( '<App /> routes render', () => {

// 	const loggedIn = true;

// 	const renderRoutes = path =>
// 		mount(
// 			<MemoryRouter initialEntries={[path]}>
// 				<Provider store={store}>
// 					<App loggedIn={loggedIn} />
// 				</Provider>
// 			</MemoryRouter>
// 		);

// 	it('renders <Home/> page on initial route', () => {
// 		const component = renderRoutes('/');

// 		expect(component.find(Home)).toHaveLength(1);
// 	});
// 	it('renders <About/> page for /about', () => {
// 		const component = renderRoutes('/about');

// 		expect(component.find(About)).toHaveLength(1);
// 	});
// 	it('renders <SubmitWorkForm/> page for /submit', () => {
// 		const component = renderRoutes('/submit');

// 		expect(component.find(SubmitWorkForm)).toHaveLength(1);
// 	});
// 	it('renders <RegistrationPage/> page for /register', () => {
// 		const component = renderRoutes('/register');

// 		expect(component.find(RegistrationPage)).toHaveLength(1);
// 	});

// 	it('renders <DoesNotExist/> page for /does-not-exist', () => {
// 		const component = renderRoutes('/does-not-exist');

// 		expect(component.find(DoesNotExist)).toHaveLength(1);
// 	});

// });

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