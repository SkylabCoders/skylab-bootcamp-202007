import React from 'react';
import './App.css';

import ProductsList from './components/productsList';
import Cart from './components/cart';

function App() {
	return (
		<>
			<ProductsList />
			<Cart />
		</>
	);
}

export default App;
