import React from 'react';
import '../styles/ProductList.css';

export default function ProductList() {
	return (
		<div>
			<ul className="product-list">
				<li className="product-list__item">
					<div className="product-list__item__name">
						LaJusticia colágeno con magnesio 450comp
					</div>
					<div className="product-list__item__price">14,35 €</div>
				</li>
				<li className="product-list__item">
					<div className="product-list__item__name">
						Xhekpon® crema facial 40ml
					</div>
					<div className="product-list__item__price">6,49 €</div>
				</li>
				<li className="product-list__item">
					<div className="product-list__item__name">
						Cerave ® Crema Hidrantante 340ml
					</div>
					<div className="product-list__item__price">11,70 €</div>
				</li>
				<li className="product-list__item">
					<div className="product-list__item__name">Hyabak solución 10ml</div>
					<div className="product-list__item__price">9,48 €</div>
				</li>
				<li className="product-list__item">
					<div className="product-list__item__name">
						Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml
					</div>
					<div className="product-list__item__price">19.74 €</div>
				</li>
				<li className="product-list__item">
					<div className="product-list__item__name">
						Piz Buin® Allergy SPF50+ loción 200ml
					</div>
					<div className="product-list__item__price">8,65 €</div>
				</li>
			</ul>
		</div>
	);
}
