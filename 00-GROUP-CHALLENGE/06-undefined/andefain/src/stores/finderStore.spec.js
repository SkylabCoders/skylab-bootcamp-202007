import FinderStore from './finderStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

describe('FinderStore', () => {
	let action;
	let myCallbackMockFunction;

	beforeEach(() => {
		myCallbackMockFunction = jest.fn();
		FinderStore.addChangeListener(myCallbackMockFunction);
	});

	it('should create', () => {
		expect(FinderStore).toBeDefined();
	});
});
