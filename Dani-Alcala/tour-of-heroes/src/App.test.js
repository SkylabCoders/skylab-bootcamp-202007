import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

describe('App', () => {
	it('should sum', () => {
		expect(2 + 2).toEqual(4);
	});

	it('should duplicate', () => {
		expect(2 * 2).toEqual(4);
	});

	it('async test 1', (done) => {
		setTimeout(done, 100);
	});

	it('async test 2', () => {
		return new Promise((resolve) => setTimeout(resolve, 100));
	});

	it('async test 3', async () => {
		return await new Promise((resolve) => setTimeout(resolve, 100));
	});
});
