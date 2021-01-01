import React from 'react';
import ProductList from './ProductList';
import CartList from './CartList';
import './productList.css';

function Dashboard() {
	return (
		<div className="main__container">
			<ProductList />
			<CartList />
		</div>
	);
}

export default Dashboard;
