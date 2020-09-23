import React from 'react';
import List from './list';
import Cart from './cart';

export default function Container() {
	return (
		<div>
			<div>
				<List />
			</div>
			<div>
				<Cart />
			</div>
		</div>
	);
}
