import React from 'react';
import { connect } from 'react-redux';

import { stateInterface } from '../../redux/stateInterface';

import './CartList.scss';

function CartList({ cart, products }: stateInterface): JSX.Element {
	let totalPrice = 0;

	const list = cart.map((element) => {
		const productElement = products[element];
		totalPrice += productElement.price;
		return (
			<div className="cart-list__item" key={productElement.id}>
				<img
					src={productElement.img}
					alt="product image"
					className="item__img"
				/>
				<div className="item__text">
					<p className="text__name">{productElement.name}</p>
					<p className="text__price">{`${productElement.price / 100}€`}</p>
				</div>
			</div>
		);
	});

	return (
		<section className="cart">
			<p className="cart__title">MI CESTA</p>
			<div className="cart__cart-list">{list}</div>
			<p>
				Total ({cart.length} productos) {`${totalPrice / 100}€`}
			</p>
		</section>
	);
}

function mapDispatchToProps(state: { cart: any[]; products: any[] }) {
	return {
		cart: state.cart,
		products: state.products
	};
}

export default connect(mapDispatchToProps)(CartList);
