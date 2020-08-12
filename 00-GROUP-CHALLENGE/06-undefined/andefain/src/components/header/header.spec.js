import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Header from './header';
import { login } from '../../actions/authActions';
import authStore from '../../stores/authStore';

function renderHeader() {
	return renderer.create(
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	);
}

describe('Header test', () => {
	let headerTree = null;
	let instance = null;
	let component = null;
	let text = null;
	let props = {};
	it('Should match', () => {
		headerTree = renderHeader();
		expect(headerTree).toMatchSnapshot();
	});

	it('Should display Login', () => {
		headerTree = renderHeader();

		instance = headerTree.root;
		component = instance.findByProps({ className: 'header-login__button' });
		text = component.children[0];
		headerTree.update();

		expect(text).toEqual('Login');
	});

	it('Should display Logout', () => {
		login('test@gmail.com', '1234567');
		headerTree = renderHeader();
		instance = headerTree.root;
		text = component.children[0];
		headerTree.update();

		expect(text).toEqual('Logout');
	});
});
/*
it('allows us to set props', () => {
	const wrapper = mount(<Foo bar="baz" />);
	expect(wrapper.props().bar).to.equal('baz');
	wrapper.setProps({ bar: 'foo' });
	expect(wrapper.props().bar).to.equal('foo');
  });*/
