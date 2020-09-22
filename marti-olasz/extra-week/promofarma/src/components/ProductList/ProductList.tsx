import React from 'react';
import { connect } from 'react-redux';

import './ProductList.scss';

import {
	addToCart,
	removeFromCart,
	changeProductInCart
} from '../../redux/actions';

function ProductList({
	products,
	dispatch
}: {
	dispatch: Function;
	products: {
		id: number;
		name: string;
		price: number;
		img: string;
		inCart: boolean;
	}[];
}): JSX.Element {
	const list = products.map((element) => {
		return (
			<div className="product-list__item" key={element.id}>
				<p className="item__name">{element.name}</p>
				<p className="item__price">{element.price}</p>

				<button
					onClick={() => {
						dispatch(changeProductInCart(element.id));
						dispatch(
							element.inCart
								? addToCart(element.id)
								: removeFromCart(element.id)
						);
					}}
					className={`item__button ${element.inCart ? 'gray' : 'green'}`}
				>
					<img
						src="https://trello-attachments.s3.amazonaws.com/5efafdc8c11d2a7055ac17ca/5f6708afcfada7261d3ec502/effece3bfc67a6ca5c71e84345f3a583/add-to-cart.png"
						alt="cart"
					/>
				</button>
			</div>
		);
	});
	return <div className="product-list">{list}</div>;
}

function mapDispatchToProps(state: {
	cart: any;
	products: {
		id: number;
		name: string;
		price: number;
		img: string;
		inCart: boolean;
	}[];
}) {
	return { products: state.products };
}

export default connect(mapDispatchToProps)(ProductList);
