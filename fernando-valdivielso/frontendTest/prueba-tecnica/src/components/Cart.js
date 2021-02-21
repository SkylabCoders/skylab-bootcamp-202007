import React from 'react';
import '../styles/Cart.css';

export default function Cart() {
	return (
		<div className="cart">
			<div className="cart__title">MI CESTA:</div>
			<hr className="cart__divider" />
			<div className="cart__info">
				<div className="cart__info__total">
					<div className="total__total">
						TOTAL{'   '}
						<span className="total__products"> (3 productos)</span>
					</div>
					<div className="total__price">27,06 €</div>
				</div>
			</div>
		</div>
	);
}
