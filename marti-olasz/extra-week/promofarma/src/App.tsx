import React from 'react';

import ProductList from './components/ProductList/ProductList';
import CartList from './components/CartList/CartLList';

function App(): JSX.Element {
	return (
		<div>
			<ProductList />
			<CartList />
		</div>
	);
}

export default App;
